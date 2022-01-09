import React from 'react';
import ReactDOM from 'react-dom';
import {
  CustomizationRating,
  SimpleRatingExample,
  SizeRatingExample,
} from '../pages/documentation/Rating/RatingExamples';

ReactDOM.render(
  <React.StrictMode>
    <CustomizationRating />
    <SimpleRatingExample />
    <SizeRatingExample />
  </React.StrictMode>,
  document.getElementById('root'),
);
