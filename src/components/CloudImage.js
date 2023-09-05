import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

const CloudImage = ({ className, publicId, alt, width, height }) => {
  const classes = className;

  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
  });
  const urlConfig = new URLConfig({ secure: true });

  // Instantiate and configure a CloudinaryImage object.
  const myImage = new CloudinaryImage(publicId, cloudConfig, urlConfig);

  myImage.resize(fill(width, height));

  // Render the image in a React component.
  return (
    <AdvancedImage
      cldImg={myImage}
      className={classes}
      alt={alt}
    ></AdvancedImage>
  );
};

export default CloudImage;
