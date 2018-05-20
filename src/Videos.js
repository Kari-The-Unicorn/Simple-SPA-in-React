import React, {
  Component
} from "react";
import YouTube from 'react-youtube';

class Videos extends Component {
  render() {


    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 1
    }
  };



    return ( < div >
    < h2 > Band videos </h2> 
<YouTube
        videoId="kcMEx4OHLOs"
        opts={opts}
        onReady={this._onReady}
      /></div>
);
}

_onReady(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}
};
    
export default Videos;