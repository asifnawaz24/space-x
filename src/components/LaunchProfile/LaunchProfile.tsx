import React from 'react'
import { LaunchProfileQuery } from '../../generated/graphql'

interface Props {
    data: LaunchProfileQuery;
}

const className = 'LaunchProfile';

export const LaunchProfileContainer: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <div>No launch available!</div>
    }
    
    return (
        <div className={className}>
            <div className={`${className}__title`}>
                {data.launch.mission_name}
                {data.launch.rocket && `${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type}`}
            </div>
            <div className={`${className}__status`}>
                <span>Flight #{data.launch.flight_number}: </span>
                {data.launch.launch_success ? (<span className={`${className}__success`}>Success!</span>) : (<span className={`${className}__failed`}>Failed!</span>) }
            </div>
            <p className={`${className}__description`}>{data.launch.details}</p>
            {!!data.launch.links && !!data.launch.links.flickr_images && (<div className={`${className}__image-list`}>
                {data.launch.links.flickr_images.map(image => image ? <a href={`${image}`} key={image} target='_blank' rel='noopener noreferrer'><img src={image} className={`${className}__image`} key={image} alt={image}/></a> : null, )}
            </div>)}
        </div>
    )
}
