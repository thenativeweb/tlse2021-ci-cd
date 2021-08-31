import { AdjustableRotatingImage } from './components/AdjustableRotatingImage';
import React from 'react';
import ReactDOM from 'react-dom';

const rootContainer = document.querySelector('#root');

/* eslint-disable no-process-env */
ReactDOM.render(
  <AdjustableRotatingImage
    src={ `${process.env.BACKEND_URL}/logo` }
    descriptionUrl={ `${process.env.BACKEND_URL}/logo_description` }
  />,
  rootContainer
);
/* eslint-enable no-process-env */
