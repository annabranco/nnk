import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { string, func } from 'prop-types';
import Link from '../../core/Link';
import { SocialLinkButton, SocialLogo } from './styles';

const SocialLink = ({ link = '', onClick, type }) => {
  let socialClassName;
  switch (type) {
    case 'Facebook':
      socialClassName = 'fab fa-facebook-f';
      break;
    case 'Twitter':
      socialClassName = 'fab fa-twitter';
      break;
    case 'Instagram':
      socialClassName = 'fab fa-instagram';
      break;
    case 'Youtube':
      socialClassName = 'fab fa-youtube';
      break;
    case 'Email':
      socialClassName = 'far fa-envelope';
      break;
    default:
      break;
  }

  return (
    <SocialLogo onClick={onClick}>
      <SocialLinkButton href={link} target="_blank">
        <i aria-hidden className={socialClassName} />
      </SocialLinkButton>
    </SocialLogo>
  );
};

SocialLink.propTypes = {
  link: string.isRequired,
  onClick: func,
  type: string.isRequired
};

SocialLink.defaultProps = {
  onClick: () => null
};

export default SocialLink;
