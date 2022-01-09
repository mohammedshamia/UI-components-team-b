import React from 'react';
import ReactDOM from 'react-dom';
import {
  TypographyExample,
  TypographyExample2,
  TypographyExample3,
} from '../pages/documentation/Typography/TypographyExamples';

ReactDOM.render(
  <React.StrictMode>
    <TypographyExample />
    <TypographyExample2 />
    <TypographyExample3 />
  </React.StrictMode>,
  document.getElementById('root'),
);
