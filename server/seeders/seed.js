const db = require('../config/connection');
const { User, Game, Room, Object, Interaction, Motive, Solution, GameUserInteraction  } = require('../models');
const gameSeeds = require('./games.json');
const roomSeeds = require('./rooms.json');

db.once('open', async () => {
  try {
    await Game.deleteMany({});
    await Room.deleteMany({});

    // returns an array of created rooms
    const rooms = await Room.insertMany(roomSeeds);

    // create an array of games, with generated room_ids
    const games = gameSeeds.map(game=> {
      const roomIds = 
        rooms
          .filter(item => item.game_id === game.game_id)
          .map(item => item._id);

      return {...game, rooms: roomIds}
    })
      
    await Game.insertMany(games);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});