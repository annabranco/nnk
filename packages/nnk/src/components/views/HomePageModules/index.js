import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { node, string } from 'prop-types';
import { ColorsPropType } from '../../../types';
import { SectionContainer } from './styles';

const PageSection = ({ children, colors, size }) => (
  <SectionContainer size={size} colors={colors}>
    {children}
  </SectionContainer>
);

PageSection.propTypes = {
  children: node,
  colors: ColorsPropType,
  size: string
};

PageSection.defaultProps = {
  children: undefined,
  colors: null,
  size: 'default'
};

export default PageSection;
