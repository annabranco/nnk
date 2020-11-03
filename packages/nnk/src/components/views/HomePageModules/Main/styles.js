import { styled, css } from 'frontity';

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  ${({ img }) => css`
    background-image: ${`url(${img})`};
    background-repeat: no-repeat;
    ${'' /* background-attachment: fixed; */}
    background-size: 100%;
    background-position: center 15%;
    border: 1px solid black;
  `}
`;
