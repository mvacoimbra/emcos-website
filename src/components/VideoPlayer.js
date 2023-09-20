import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

// Create and configure the Cloudinary instance.
const VideoPlayer = ({ className }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
    },
  });

  // Use the video with public ID'
  const myVideo = cld.video('emcos_website/pi3ca2etadscrh28h7jh');

  // Apply the transformation.
  myVideo.resize(fill(1280, 720));

  return (
    <>
      <AdvancedVideo
        cldVid={myVideo}
        autoPlay
        muted
        loop
        className={className}
      />
    </>
  );
};

export default VideoPlayer;
