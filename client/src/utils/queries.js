import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
query Games {
    games {
      _id
      title
      game_id
      story_line
      time_limit
    } 
`