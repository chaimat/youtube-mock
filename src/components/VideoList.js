import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

    const videoList = props.videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect}/>)

    return (
        <div className='ui relaxed divided list'>{videoList}</div>
    )
}

export default VideoList;