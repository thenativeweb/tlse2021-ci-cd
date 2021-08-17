import { AdjustableRotatingImage } from './components/AdjustableRotatingImage';
import React from 'react';
import ReactDOM from 'react-dom';

const rootContainer = document.querySelector('#root');

ReactDOM.render(
  <AdjustableRotatingImage
    src='http://localhost:8000/logo'
    description='a spinning image'
  />,
  rootContainer
);
