import { AdjustableRotatingImage } from './components/AdjustableRotatingImage';
import logo from './static/logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';

const rootContainer = document.querySelector('#root');

ReactDOM.render(
  <AdjustableRotatingImage
    src={ logo }
    description='a spinning image'
  />,
  rootContainer
);
