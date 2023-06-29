import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
// css
// import './CloudnaryImage.css';
// assets
// components

const CloudImage = (props) => {
  const classes = props.className;

  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'mvacoimbra' });
  const urlConfig = new URLConfig({ secure: true });

  // Instantiate and configure a CloudinaryImage object.
  const myImage = new CloudinaryImage(props.publicId, cloudConfig, urlConfig);

  myImage.resize(fill(props.width, props.height));

  // Render the image in a React component.
  return (
    <AdvancedImage cldImg={myImage} className={classes} alt={props.alt}>
    </AdvancedImage>
  );
};

export default CloudImage;
