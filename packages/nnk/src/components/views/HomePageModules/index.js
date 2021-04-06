/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { bool, node, string } from 'prop-types';
import { ColorsPropType } from '../../../types';
import { SectionContainer } from './styles';

const PageSection = ({ children, colors, noBorder, size }) => (
  <SectionContainer noBorder={noBorder} size={size} colors={colors}>
    {children}
  </SectionContainer>
);

PageSection.propTypes = {
  children: node,
  colors: ColorsPropType,
  noBorder: bool,
  size: string
};

PageSection.defaultProps = {
  children: undefined,
  colors: null,
  noBorder: false,
  size: 'default'
};

export default PageSection;
