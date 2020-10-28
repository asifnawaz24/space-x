import * as React from 'react';
import { useLaunchProfileQuery } from '../../generated/graphql';
import { LaunchProfileContainer } from './LaunchProfile';
import './style.css';

interface Props {
    id: number;
}

export const LaunchProfile: React.FC<Props> = ({ id }) => {
    const { data, loading, error, refetch } = useLaunchProfileQuery({ variables: { id: String(id) } });

    
    React.useEffect(() => {
        refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    
    if (loading) {
        return <div>loading...</div>
    }

    if (error) {
        return <div>{`Error ${error.message}`}</div>
    }

    if (!data) {
        return <div>Select a flight from the panel</div>
    }

    return <LaunchProfileContainer data={data} />
}
