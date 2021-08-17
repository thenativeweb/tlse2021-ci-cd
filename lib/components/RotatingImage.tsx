import { Speed } from '../types/Speed';
import React, { FunctionComponent, ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

const speedValueToSeconds = function (speed: Speed): number {
  return (Speed.fastest - speed) + 1;
};

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

interface RotatingImageContainerProps {
  $speed: Speed;
}

const RotatingImageContainer = styled.img<RotatingImageContainerProps>`
  animation: ${rotation} ${({ $speed }): string => `${speedValueToSeconds($speed)}`}s infinite linear;
`;

interface RotatingImageProps {
  src: string;
  description: string;
  width: string;
  rotationSpeed: Speed;
}

const RotatingImage: FunctionComponent<RotatingImageProps> = function ({
  src,
  description,
  width,
  rotationSpeed
}): ReactElement {
  return (
    <RotatingImageContainer
      src={ src }
      alt={ description }
      width={ width }
      $speed={ rotationSpeed }
    />
  );
};

export { RotatingImage };
