const db = require('../config/connection');
const { User, Game, Room, Object, Interaction, Motive, Solution, GameUserInteraction, LeaderBoard } = require('../models');

const SolutionLetter = require('../models/SolututionLetter')
const gameSeeds = require('./games.json');
const roomSeeds = require('./rooms.json');
const objectSeeds = require('./objects.json');
const interactionSeeds = require('./interactions.json');
const motiveSeeds = require('./motive.json');
const solutionLetterSeeds = require('./solutionLetter.json');
const solutionSeeds = require('./solution.json');
const userSeeds = require('./user.json');
const leaderboardSeeds = require('./leaderboard.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Game.deleteMany({});
    await Room.deleteMany({});
    await Object.deleteMany({});
    await Interaction.deleteMany({});
    await Motive.deleteMany({});
    await Solution.deleteMany({});
    await User.deleteMany({});
    await SolutionLetter.deleteMany({});
    await LeaderBoard.deleteMany({});

    const solution = await Solution.insertMany(solutionSeeds);
    const user = await User.insertMany(userSeeds);
    const solutionLetter = await SolutionLetter.insertMany(solutionLetterSeeds);
    const motives = await Motive.insertMany(motiveSeeds);
    const leaderboard = await LeaderBoard.insertMany(leaderboardSeeds);


    // apply motives to interactions
    let interactions = interactionSeeds.map(interaction => {
      const motiveIds =
        motives
          .filter(motive => motive.interaction_id === interaction.interaction_id)
          .map(motive => motive._id);

      return { ...interaction, motives: motiveIds }
    })
    interactions = await Interaction.insertMany(interactions);

    // apply interactions to objects
    let objects = objectSeeds.map(object => {
      const interactionIds =
        interactions
          .filter(interaction => interaction.object_id === object.object_id)
          .map(interaction => interaction._id);

      return { ...object, interactions: interactionIds }
    })
    objects = await Object.insertMany(objects);

    // apply objects to rooms
    let rooms = roomSeeds.map(room => {
      const objectIds =
        objects
          .filter(object => object.room_id === room.room_id)
          .map(object => object._id);

      return { ...room, objects: objectIds }
    })
    rooms = await Room.insertMany(rooms);


    // create an array of games, with generated room_ids
    let games = gameSeeds.map(game => {
      const roomIds =
        rooms
          .filter(room => room.game_id === game.game_id)
          .map(room => room._id);

      return { ...game, rooms: roomIds }
    })
    games = await Game.insertMany(games);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});