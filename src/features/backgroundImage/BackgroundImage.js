import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBackgroundImage } from './backgroundImageSlice';

const BackgroundImage = () => {
  const imageUrl = useSelector((state) => state.backgroundImage.imageUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBackgroundImage());
  }, [dispatch]);

  return (
    <div id="background-image-container">
      <img src={imageUrl} alt="" id="background-image" />
    </div>
  );
};

export default BackgroundImage;
