import { styled, css } from 'frontity';

export const PhotoContainer = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  width: 100%;

  ${({ img }) => css`
    border: 1px solid black;
    background-image: ${`url(${img})`};
    background-position: center 15%;
    background-size: 100%;
    background-repeat: no-repeat;
  `}
`;
