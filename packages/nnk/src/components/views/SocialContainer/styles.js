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

  ${({ size }) =>
    size === 'small' &&
    css`
      position: normal;
      margin: 20px;
    `}

  @media only screen and (min-width: 375px) {
    margin-top: 15px;
  }

  @media only screen and (min-width: 768px) {
    margin: 20px 40px;
  }

  @media only screen and (min-width: 1024px) {
    margin: 80px 40px;
  }
`;
SocialContainer.displayName = 'SocialContainer';
