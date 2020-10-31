import React, { useState } from 'react';
import { node } from 'prop-types';
import { InDevelopmentContainer } from './styles';

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

InDevelopment.propTypes = {
  children: node.isRequired
};

export default InDevelopment;
