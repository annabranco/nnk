import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { arrayOf, string } from 'prop-types';
import SocialLink from '../SocialLink';
import { SocialContainer } from './styles';
import { ConfigSocialLinksPropType } from '../../../types';

const SocialModule = ({ size, socialLinks }) => (
  <SocialContainer size={size}>
    {socialLinks.map(
      ({ type, link, hide }) =>
        !hide && <SocialLink key={type} type={type} link={link} size={size} />
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
