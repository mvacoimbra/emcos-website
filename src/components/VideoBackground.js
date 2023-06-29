import React from 'react';
import { useEffect, useRef } from 'react';
// css
import './VideoBackground.css';
// assets
// components
import Container from './structure/Container';
import VideoPlayer from './VideoPlayer';

const VideoBackground = (props) => {
  const classes = '' + props.className;

  return (
    <Container className="divWithVideo">
      <div className={classes}>{props.children}</div>

      <div className="shadowmask"></div>
      <VideoPlayer className="videoBackground"></VideoPlayer>
    </Container>
  );
};

export default VideoBackground;
