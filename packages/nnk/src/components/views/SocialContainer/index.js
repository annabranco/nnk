/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { arrayOf, bool, string } from 'prop-types';
import SocialLink from '../SocialLink';
import { SocialContainer } from './styles';
import { ConfigSocialLinksPropType } from '../../../types';

const SocialModule = ({ inHeader, size, socialLinks }) => (
  <SocialContainer inHeader={inHeader} size={size}>
    {socialLinks.map(
      ({ type, link, hide }) =>
        !hide && <SocialLink key={type} link={link} size={size} type={type} />
    )}
  </SocialContainer>
);

SocialModule.propTypes = {
  inHeader: bool,
  size: string,
  socialLinks: arrayOf(ConfigSocialLinksPropType).isRequired
};

SocialModule.defaultProps = {
  inHeader: false,
  size: null
};

export default SocialModule;
