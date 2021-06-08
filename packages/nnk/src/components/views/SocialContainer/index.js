/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { arrayOf, string } from 'prop-types';
import SocialLink from '../SocialLink';
import { SocialContainer } from './styles';
import { ConfigSocialLinksPropType } from '../../../types';

const SocialModule = ({ size, socialLinks }) => (
  <SocialContainer size={size}>
    {socialLinks.map(
      ({ type, link, hide }) =>
        !hide && <SocialLink key={type} link={link} size={size} type={type} />
    )}
  </SocialContainer>
);

SocialModule.propTypes = {
  size: string,
  socialLinks: arrayOf(ConfigSocialLinksPropType).isRequired
};

SocialModule.defaultProps = {
  size: null
};

export default SocialModule;
