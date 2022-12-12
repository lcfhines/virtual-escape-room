import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            first_name
            last_name
            email
            password
        }
    }
`;

export const QUERY_USER = gql`
    query User($userId: ID!) {
        user(userId: $userId) {
            _id
            first_name
            last_name
            email
            password
        }
    }
`;

export const QUERY_GAMES = gql`
query Games {
    games {
      _id
      title
      game_id
      story_line
      time_limit
    }
  } 
`;


  export const QUERY_GAME_ROOMS = gql`
  query Query($gameId: Int!) {
    game(gameId: $gameId) {
      story_line
      time_limit
      title
      rooms {
        title
        room_id
      }
    }
  }
  `;

export const QUERY_ROOM = gql`
query Room($roomId: Int!) {
    room(roomId: $roomId) {
      description
      title
      objects {
        name
        type
        is_weapon
      }
    }
  }
`;