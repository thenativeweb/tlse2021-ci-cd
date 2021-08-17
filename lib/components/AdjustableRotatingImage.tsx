import { RotatingImage } from './RotatingImage';
import { Slider } from './Slider';
import { Speed } from '../types/Speed';
import styled from 'styled-components';
import React, { FunctionComponent, ReactElement, useState } from 'react';

const widthStepInPixel = 50;
const maxStepCount = 9;

const ImageContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

interface AdjustableRotatingImageProps {
  src: string;
  description: string;
}

const AdjustableRotatingImage: FunctionComponent<AdjustableRotatingImageProps> = function ({
  src,
  description
}): ReactElement {
  const [ speed, setSpeed ] = useState(Speed.normal);
  const [ widthInPixel, setWidthInPixel ] = useState(Math.ceil(maxStepCount / 2) * widthStepInPixel);

  return (
    <React.Fragment>
      <ImageContainer>
        <RotatingImage
          src={ src }
          description={ description }
          width={ `${widthInPixel}px` }
          rotationSpeed={ speed }
        />
      </ImageContainer>
      <Slider
        min={ Speed.slowest }
        max={ Speed.fastest }
        step={ 1 }
        value={ speed }
        label='Speed'
        onChange={ (newValue): void => {
          setSpeed(newValue);
        } }
      />
      <Slider
        min={ widthStepInPixel }
        max={ maxStepCount * widthStepInPixel }
        step={ widthStepInPixel }
        value={ widthInPixel }
        label='Size'
        onChange={ (newValue): void => {
          setWidthInPixel(newValue);
        } }
      />
    </React.Fragment>
  );
};

export { AdjustableRotatingImage };
