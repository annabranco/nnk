import { styled, css } from 'frontity';
import { SMALL } from '../../../constants/sizes';

export const SocialContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  @media only screen and (min-width: 375px) {
    margin-top: 15px;
  }

  @media only screen and (min-width: 768px) {
    margin: 20px 40px;

    ${({ size }) =>
      size === SMALL &&
      css`
        position: normal;
        margin: 30px 15px;
      `}
  }

  @media only screen and (min-width: 1024px) {
    margin: 40px 40px 80px;

    ${({ size }) =>
      size === SMALL &&
      css`
        position: normal;
        margin: 10px 20px;
      `}
  }

  ${({ inHeader }) => inHeader && css`
    display: none;
    @media only screen and (min-width: 768px) {
      display: block;
    }
  `}
`;
SocialContainer.displayName = 'SocialContainer';
