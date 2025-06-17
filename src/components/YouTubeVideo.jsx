
 import YouTube from "react-youtube";


 function YouTubeVideo({videoId}){
    const options = {
            height: "169",
            width: "300",
            playerVars: {
              autoplay: 1,
              controls: 1,
            }
        }
    
        const onReady = (event) => {
        event.target.pauseVideo();
        }


    return(
        <YouTube videoId={videoId} opts={options} onReady={onReady} id="video"/>
    )

 }

  export default YouTubeVideo;