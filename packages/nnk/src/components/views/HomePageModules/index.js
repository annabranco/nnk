import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { string } from 'prop-types';
import { SectionContainer } from './styles';

const PageSection = ({ size, children, colors }) => (
  <SectionContainer size={size} colors={colors}>
    {children}
  </SectionContainer>
);

PageSection.propTypes = {
  children: string,
  colors: string.isRequired,
  size: string
};

PageSection.defaultProps = {
  children: undefined,
  size: 'default'
};

export default PageSection;
