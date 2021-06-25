import React from 'react';

const VideoDetails = props => {

    if(!props.selectedVideo){
         return null
    }

    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`

    return(
        <div>
            <div className='ui embed'>
                <iframe src = {videoSrc} />
            </div>
            <div className='ui segment raised'>
                <div className='ui header'> {props.selectedVideo.snippet.title} </div>
                <div> {props.selectedVideo.snippet.description} </div>
            </div>
        </div>       
    )
};

export default VideoDetails;