/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';

import { COLORS } from '../../constants';

const ProgressBar = ({ value = 0, size = "small"}) => {
  return (
    <Wrapper 
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}>
        <VisuallyHidden>{value} %</VisuallyHidden>
        <ProgressWrapper>
          <Progress value={value} size={size} />
        </ProgressWrapper>
      </Wrapper>);
};

export default ProgressBar;

const WrapperHeights = {
  small: 8,
  medium: 12,
  large: 24,
};

const WrapperBorders = {
  small: "4px",
  medium: "4px",
  large: "8px",
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 370px;
  height: ${props => WrapperHeights[props.size] || 12}px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${props => WrapperBorders[props.size]};
  padding: ${props => props.size === "large" ? "4px" : "inherit"};
  overflow: hidden;
`;

const ProgressWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressHeights = {
  ...WrapperHeights,
  large: 16,
}

const Progress = styled.div`
  box-sizing: border-box;
  height: ${props => ProgressHeights[props.size] || 12}px;
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
`;