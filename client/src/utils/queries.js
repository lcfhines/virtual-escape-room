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