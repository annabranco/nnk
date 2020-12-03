import { styled, css } from 'frontity';

export const SocialContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 40px;

  ${({ size }) =>
    size === 'small' &&
    css`
      position: normal;
      margin: 20px;
    `}
`;
SocialContainer.displayName = 'SocialContainer';
