import { styled, css } from 'frontity';

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
      size === 'small' &&
      css`
        position: normal;
        margin: 30px 15px;
      `}
  }

  @media only screen and (min-width: 1024px) {
    margin: 40px 40px 80px;

    ${({ size }) =>
      size === 'small' &&
      css`
        position: normal;
        margin: 10px 20px;
      `}
  }
`;
SocialContainer.displayName = 'SocialContainer';
