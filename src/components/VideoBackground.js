import React from 'react';
import { useEffect, useRef } from 'react';
// css
import './VideoBackground.css';
// import 'cloudinary-video-player/dist/cld-video-player.min.css';
// assets
// components
import Container from './Container';
import VideoPlayer from './VideoPlayer';
// import cloudinary from 'cloudinary-video-player';

const VideoBackground = (props) => {
  const classes = '' + props.className;

  // const cloudinaryRef = useRef();
  // const videoRef = useRef();

  // useEffect(() => {
  //   if (cloudinaryRef.current) return;
  //   cloudinaryRef.current = window.cloudinary;
  //   cloudinaryRef.current.videoPlayer(videoRef.current, {
  //     cloud_name: 'mvacoimbra',
  //     autoplay: true,
  //     autoplayMode: 'on-scroll',
  //     muted: true,
  //     loop: true,
  //     width: 4000
  //   });
  // }, []);

  // console.log(cloudinaryRef.current);

  return (
    <Container className="divWithVideo">
      <div className={classes}>{props.children}</div>

      <div className="shadowmask"></div>
      <VideoPlayer className="videoBackground"></VideoPlayer>
    </Container>
  );
};

export default VideoBackground;
