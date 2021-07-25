import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectEl value={value} onChange={onChange}>
        {children}
      </SelectEl>
      <Presentation>{displayedValue}<Icon id="chevron-down" /></Presentation>
    </Wrapper>
  );
};

export default Select;

const SelectEl = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Wrapper = styled.div`  
  position: relative;
  width: fit-content;
  border-radius: 8px;
  overflow: hidden;
`;



const Presentation = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 16px;
  color: ${COLORS.gray700};

  svg {
    margin-left: 16px;
  }

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }

  ${SelectEl}:focus + & {
    outline: 1px solid ${COLORS.primary};
    outline: 5px auto --webkit-focus-ring-color;
  }
`;