import React, { useState } from 'react';
import { styled, css } from 'frontity';

const InDevelopment = ({ children }) => {
  const [displayTooltip, toggleTooltip] = useState(false);

  return (
    <InDevelopmentContainer
      displayTooltip={displayTooltip}
      onMouseOut={() => toggleTooltip(false)}
      onClick={() => toggleTooltip(true)}
    >
      {children}
    </InDevelopmentContainer>
  );
};

export default InDevelopment;

const InDevelopmentContainer = styled.div`
  ${({ displayTooltip }) =>
    displayTooltip &&
    css`
      &::before {
        position: absolute;
        content: 'Check back soon';
        border: 1px solid red;
        background: white;
        padding: 2px 5px;
        border-radius: 5px;
        font-weight: 600;
        color: red;
        opacity: 0.9;
        text-align: right;
        transform: translate(60px, 0px);
      }
    `}
`;
