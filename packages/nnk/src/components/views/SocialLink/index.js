import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { string, func } from 'prop-types';
import { SocialLogo } from './styles';
import Link from '../../core/Link';

const SocialLink = ({ type, link = '', onClick }) => {
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
      <Link href={link}>
        <i aria-hidden className={socialClassName} />
      </Link>
    </SocialLogo>
  );
};

SocialLink.propTypes = {
  type: string.isRequired,
  link: string.isRequired,
  onClick: func
};

SocialLink.defaultProps = {
  onClick: () => null
};

export default SocialLink;
