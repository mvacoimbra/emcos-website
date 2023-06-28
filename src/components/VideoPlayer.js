import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
// css
// assets
// components

// Create and configure the Cloudinary instance.
const VideoPlayer = (props) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'mvacoimbra',
    },
  });

  // Use the video with public ID'
  const myVideo = cld.video('emcos_website/pi3ca2etadscrh28h7jh');

  // Apply the transformation.
  myVideo.resize(fill(1280, 720))

  // classes
  const classes = props.className

  return (
    <div>
      <AdvancedVideo cldVid={myVideo} autoPlay muted loop className={classes}/>
    </div>
  );
};

export default VideoPlayer;
