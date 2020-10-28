import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
    query LaunchList {
        launches {
            flight_number
            launch_year
            mission_name
        }
    }
`;
