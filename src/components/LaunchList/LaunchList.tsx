import React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import './style.css';

interface Props {
    data: LaunchListQuery;
    handleIdChange: (newId: number) => void;
}

const className = 'LaunchList';

export const LaunchListContainer: React.FC<Props> = ({ data, handleIdChange }) => {
    return (
        <div className={className}>
            <h1>Launches</h1>
            <div className={`${className}__list-scroll`}>
                <ol className={`${className}__list`}>
                    {!!data.launches &&
                        data.launches.map((launch, i) =>
                        !!launch && (
                            <li key={i} className={`${className}__item`} onClick={() => handleIdChange(launch.flight_number!)}>
                                    {launch.mission_name} ({launch.launch_year})
                                </li>
                            ),
                            )}
                </ol>
            </div>
        </div>
    )
}
