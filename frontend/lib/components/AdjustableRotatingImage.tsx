import { RotatingImage } from './RotatingImage';
import { Slider } from './Slider';
import { Speed } from '../types/Speed';
import styled from 'styled-components';
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';

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

const DescriptionContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface AdjustableRotatingImageProps {
  src: string;
  descriptionUrl: string;
}

const AdjustableRotatingImage: FunctionComponent<AdjustableRotatingImageProps> = function ({
  src,
  descriptionUrl
}): ReactElement {
  const [ description, setDescription ] = useState<string>('loading...');
  const [ speed, setSpeed ] = useState(Speed.normal);
  const [ widthInPixel, setWidthInPixel ] = useState(Math.ceil(maxStepCount / 2) * widthStepInPixel);

  useEffect((): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async (): Promise<void> => {
      const descriptionResponse = await fetch(descriptionUrl);

      if (descriptionResponse.status !== 200) {
        return setDescription('loading...');
      }

      setDescription(await descriptionResponse.text());
    })();
  });

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
      <DescriptionContainer>
        { description }
      </DescriptionContainer>
      <Slider
        min={ Speed.slowest }
        max={ Speed.fastest }
        step={ 1 }
        value={ speed }
        label='Speeeeeeeeeeed'
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
