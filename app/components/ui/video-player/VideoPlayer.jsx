import { useVideo } from "./useVideo";
import MaterialIcon from "../MaterialIcon";

import styles from "./VideoPlayer.module.scss";

const VideoPlayer = ({ videoSource }) => {
   const { actions, video, videoRef } = useVideo();

   return (
      <div className={styles.wrapper}>
         <video
            ref={videoRef}
            className={styles.video}
            src={`${videoSource}#t=8`}
            preload="metadata"
         />

         <div className={styles.progressBarContainer}>
            <div
               style={{ width: `${video.progress}%` }}
               className={styles.progressBar}
            />
         </div>

         <div className={styles.controls}>
            <div>
               <button onClick={actions.revert}>
                  <MaterialIcon name="MdHistory" />
               </button>

               <button
                  onClick={actions.toggleVideo}
                  className={styles.playButton}
               >
                  <MaterialIcon
                     name={video.isPlaying ? "MdPause" : "MdPlayArrow"}
                  />
               </button>

               <button onClick={actions.forward}>
                  <MaterialIcon name="MdUpdate" />
               </button>

               <div className={styles.timeControls}>
                  <p className={styles.controlsTime}>
                     {Math.floor(video.currentTime / 60) +
                        ":" +
                        ("0" + Math.floor(video.currentTime % 60)).slice(-2)}
                  </p>
                  <p> / </p>
                  <p className={styles.controlsTime}>
                     {Math.floor(video.videoTime / 60) +
                        ":" +
                        ("0" + Math.floor(video.videoTime % 60)).slice(-2)}
                  </p>
               </div>
            </div>

            <div>
               <button onClick={actions.fullScreen}>
                  <MaterialIcon name="MdFullscreen" />
               </button>
            </div>
         </div>
      </div>
   );
};

// If you wanna add change quality buttons
//kmoskwiak.github.io/videojs-resolution-switcher/
//https://stackoverflow.com/questions/38626993/change-video-quality-with-sources-pointing-to-different-quality-versions

export default VideoPlayer;
