import styled from 'styled-components';
import React, { FunctionComponent, ReactElement } from 'react';

const LabelAndSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  label: string;
  onChange: (newValue: number) => void;
}

const Slider: FunctionComponent<SliderProps> = function ({
  min,
  max,
  step,
  value,
  label,
  onChange
}): ReactElement {
  return (
    <LabelAndSlider>
      <input
        type='range'
        min={ min }
        max={ max }
        step={ step }
        value={ value }
        onChange={ (event): void => {
          onChange(Number.parseInt(event.target.value, 10));
        } }
      />
      { label }
    </LabelAndSlider>
  );
};

export { Slider };
