import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { arrayOf } from 'prop-types';
import SocialLink from '../SocialLink';
import { SocialContainer } from './styles';
import { ConfigSocialLinksPropType } from '../../../types';

const SocialModule = ({ socialLinks }) => (
  <SocialContainer>
    {socialLinks.map(
      ({ type, link, hide }) =>
        !hide && <SocialLink key={type} type={type} link={link} />
    )}
  </SocialContainer>
);

SocialModule.propTypes = {
  socialLinks: arrayOf(ConfigSocialLinksPropType).isRequired
};

export default SocialModule;
