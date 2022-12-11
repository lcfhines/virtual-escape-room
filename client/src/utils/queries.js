import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            first_name
            last_name
            email
            password
            games_played
            best_score
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
            games_played
            best_score
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
`;