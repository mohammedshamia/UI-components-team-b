import React from 'react';
import Rating from '../components/baseComponent/Rating';

const RatingPage = () => {
  return (
    <Rating
      isRow
      count={5}
      // style={{ textAlign: 'center', background: 'red' }}
    />
  );
};

export default RatingPage;
