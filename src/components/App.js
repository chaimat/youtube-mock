import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import youtube from '../api/youtube';

const KEY = 'AIzaSyA3n2G1HBbhEOaqP2KtdkzeSf4ooQPQ1gY';


class App extends React.Component {

    state = { videos: [], selectedVideo: null}

    componentDidMount(props){

        this.onFormSubmit('youtube')
    }

    onFormSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q : term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY
            }
        });

        console.log(response)
        this.setState({videos: response.data.items, selectedVideo: null});
    };

    onVideoSelect = video => {
        console.log(video);
        this.setState({selectedVideo: video})
    }



    render(){
        return (
        <div className='ui container'>
            <SearchBar onFormSubmit={this.onFormSubmit} />
            <div className="ui grid">
                <div className='ui row'>
                    <div className={this.state.selectedVideo ? 'eleven wide column' : 'placeholder'}>
                        <VideoDetails selectedVideo={this.state.selectedVideo} />
                    </div>
                    <div className={this.state.selectedVideo ? 'five wide column' : 'sixteen wide column'}>
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;