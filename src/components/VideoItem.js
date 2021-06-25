import React from 'react';
import './VideoItem.css'

class VideoItem extends React.Component {

    render(props){
        return(
            <div className='video-item item' onClick={() => this.props.onVideoSelect(this.props.video)}>
                <img className='ui image' src={this.props.video.snippet.thumbnails.medium.url} />
                <div className='content'>
                    <a className='header'>
                        {this.props.video.snippet.title}
                    </a>
                </div>
            </div>
        )
    }
};

export default VideoItem;