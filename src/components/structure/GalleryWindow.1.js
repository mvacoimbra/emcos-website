import React, { useState } from 'react';
import CloudImage from '../CloudImage';

export const GalleryWindow = ({
  active,
  updateWindowStatus,
  currentFolder,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleCloseClick = () => {
    setIsActive(false);
    updateWindowStatus(isActive);
  };

  const nextImage = () => {
    if (currentImage == 5) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage == 0) {
      setCurrentImage(5);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  console.log(currentImage);

  const WindowButton = ({ faIcon, onClick, btnClass }) => {
    return (
      <div className={`window-btn__wrapper ${btnClass ? btnClass : ''}`}>
        <button className="window-btn__btn" onClick={onClick}>
          <i className={faIcon} />
        </button>
      </div>
    );
  };

  return (
    <>
      {active ? (
        <div className="gallery-window__container">
          <div className="gallery-window__wrapper">
            <button
              className="gallery-window__close-btn"
              onClick={handleCloseClick}
            >
              <i className="fa-solid fa-xmark" />
            </button>
            <div className="gallery-window__box">
              <div className="image__controls">
                <WindowButton
                  faIcon={'fa-solid fa-chevron-left'}
                  btnClass={'left'}
                  onClick={prevImage}
                />
                <WindowButton
                  faIcon={'fa-solid fa-chevron-right'}
                  onClick={nextImage}
                />
              </div>
              <CloudImage
                publicId={`emcos_website/portfolio/${currentFolder}/image_${currentImage}`}
                className={'gallery-window__image'}
              />
            </div>
          </div>
          <div className="shadow" />
        </div>
      ) : null}
    </>
  );
};
