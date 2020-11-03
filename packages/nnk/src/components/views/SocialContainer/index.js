import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { string } from 'prop-types';
import SocialLink from '../SocialLink';
import { SocialContainer } from './styles';

const SocialModule = ({ socialLinks }) => (
  <SocialContainer>
    {socialLinks.map(
      ({ type, link, hide }) =>
        !hide && <SocialLink key={type} type={type} link={link} />
    )}
  </SocialContainer>
);

SocialModule.propTypes = {
  socialLinks: string.isRequired
};

export default SocialModule;
