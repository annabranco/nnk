import { styled } from 'frontity';
import config from '../../../setup/config';

export const SocialLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #acacac;
  border-radius: 50%;
  margin: 10px;
  background: ${config.buttonsBackground};
  height: 50px;
  width: 50px;
  font-size: 2rem;
  color: ${config.buttonsText};
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.2);
    color: ${config.buttonsHighlight};
  }
`;
