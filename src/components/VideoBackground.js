import React from 'react';
// css
import './VideoBackground.css';
// assets
import video from '../assets/video_hd_edit.mp4';
// components
import Container from './Container';

const VideoBackground = (props) => {
  const classes = "" + props.className
  return (
    <Container className="divWithVideo">
      <div className={classes}>{props.children}</div>
      <div className="shadow"></div>
      <video className="videoBackground" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </Container>
  );
};

export default VideoBackground;
