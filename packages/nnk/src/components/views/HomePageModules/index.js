import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { node, string } from 'prop-types';
import { SectionContainer } from './styles';
import { ColorsPropType } from '../../../types';

const PageSection = ({ size, children, colors }) => (
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
