import { styled, css } from 'frontity';

export const PhotoContainer = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  width: 100%;

  ${({ img, position = 'center 15%' }) => css`
    background-image: ${`url(${img})`};
    background-position: ${position};
    background-size: 100%;
    background-repeat: no-repeat;
  `}
`;
