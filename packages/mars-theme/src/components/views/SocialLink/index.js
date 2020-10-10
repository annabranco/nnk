import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { styled } from 'frontity';
import { string, func } from 'prop-types';

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
    default:
      break;
  }

  return (
    <SocialLogo onClick={onClick}>
      <a href={link}>
        <i className={socialClassName} />
      </a>
    </SocialLogo>
  );
};

SocialLink.propTypes = {
  type: string,
  link: string,
  onClick: func
};

SocialLink.defaultProps = {
  type: '',
  link: '',
  onClick: () => null
};

export default SocialLink;

const SocialLogo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  color: black;
  background: white;
  font-size: 2rem;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    color: crimson;
    transform: scale(1.2);
  }
`;
