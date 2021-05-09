import { styled } from 'frontity';
import config from '../../../setup/config';

export const SocialLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 20px;
  background: ${config.buttonsBackground};
  height: 50px;
  width: 50px;
  font-size: 3rem;
  color: ${config.buttonsText};
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.2);
    color: ${config.buttonsHighlight};
  }

  @media only screen and (min-width: 375px) {
    margin-left: 25px;
  }

  @media only screen and (min-width: 768px) {
    margin: 10px;
    font-size: 2rem;
    height: 60px;
    width: 60px;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    margin: 20px;
    font-size: 3.5rem;
    height: 80px;
    width: 80px;
  }
`;
SocialLogo.displayName = 'SocialLogo';

export const SocialLinkButton = styled.a`
  text-decoration: none;
  color: black;
`;
