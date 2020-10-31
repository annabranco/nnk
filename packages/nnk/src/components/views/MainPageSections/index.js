import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { string } from 'prop-types';
import { SectionContainer } from './styles';

const PageSection = ({ size, children }) => (
  <SectionContainer size={size}>{children}</SectionContainer>
);

PageSection.propTypes = {
  children: string,
  size: string
};

PageSection.defaultProps = {
  children: undefined,
  size: 'default'
};

export default PageSection;
