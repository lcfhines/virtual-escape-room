const db = require('../config/connection');
const { User, Game, Room, Object, Interaction, Motive, Solution, GameUserInteraction  } = require('../models');
const gameSeeds = require('./games.json');
const roomSeeds = require('./rooms.json');
const objectSeeds = require('./objects.json');
const interactionSeeds = require('./interactions.json');
const motiveSeeds = require ('./motive.json');

db.once('open', async () => {
  try {
    await Game.deleteMany({});
    await Room.deleteMany({});
    await Object.deleteMany({});
    await Interaction.deleteMany({});
    await Motive.deleteMany({});

    // const interactions =  Interactions.insertMany
    // let objects = objectSeeds.map -- have new property interactions array with ids
    // const motives =  Motive.insertMany
    // objects = objectSeeds.map -- -- have new property motives array with ids
    // const objects =  Objects.insertMany

    // let rooms = roomSeeds.map -- have new property objects array with ids
    // const rooms = await Room.insertMany

    // let games = gameSeeds.map -- have new property rooms array with ids
    // const games = await Game.insertMany





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