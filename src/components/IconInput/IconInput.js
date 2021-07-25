import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const IconSize = size === 'small' ? 16 : 24;

  return (
  <InputWrapper width={width} size={size}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <ContainedInput size={size} {...delegated} />
    <PositionedIcon id={icon} size={IconSize} />
  </InputWrapper>);
};

export default IconInput;

const SizeStyles = {
  small: {
    containerHeight: "1.5rem",
    iconPadding: "24px",
    fontSize: "0.875rem",
    borderSize: "1px",
  },
  large: {
    containerHeight: "2.25rem",
    iconPadding: "36px",
    fontSize: "1.125rem",
    borderSize: "2px",
  }
}

const ContainedInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  border-bottom: ${props => SizeStyles[props.size].borderSize} solid ${COLORS.black};
  padding-top: 0;
  padding-right: 0;
  padding-left: ${props => SizeStyles[props.size].iconPadding};
  padding-bottom: 0.25rem;
  font-weight: 700;
  font-size: ${props => SizeStyles[props.size].fontSize};
  color: inherit;

  &:focus {
    outline-offset: 4px;
    outline: 1px solid blue;
  }

  &::placeholder {
    font-weight: 400;
    color: {COLORS.gray500};
  }
`;

const InputWrapper = styled.label`
  display: inline-block;
  width: ${props => props.width}px;
  height: ${props => SizeStyles[props.size].containerHeight};
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;


const PositionedIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0.1rem;
`;