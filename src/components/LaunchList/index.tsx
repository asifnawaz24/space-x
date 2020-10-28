import React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import { LaunchListContainer } from './LaunchList';
import './style.css';

interface Props {
    handleIdChange: (newId: number) => void;
};

export const LaunchList = (props: Props) => {
    const { error, data, loading } = useLaunchListQuery();
    
    if (loading) {
        return <div>Loading...</div>
    }

    if (error || !data) {
        return <div>Error: {`${error?.message}`}</div>
    }

    return <LaunchListContainer data={data} {...props}/>
};