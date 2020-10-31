import { styled } from 'frontity';
import config from '../../../setup/config';

export const SocialLogo = styled.div`
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
  color: ${config.buttonsText};
  background: ${config.buttonsBackground};

  &:hover {
    color: ${config.buttonsHighlight};
    transform: scale(1.2);
  }
`;
