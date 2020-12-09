import { styled, css } from 'frontity';
import { BaseText, sizeLargeTitle } from '../../../../setup/themes';

export const MainText = styled(BaseText)`
  position: absolute;
  bottom: 15vh;
  right: 6vw;
  white-space: pre;
  font-size: ${sizeLargeTitle};
  font-style: italic;
  font-weight: 900;
  line-height: 1.5;
  /* text-shadow: 0 0 10px black; */
  border-radius: 10px;
  padding: 5px 10px;
  -webkit-text-stroke: 1px black;
  text-shadow: -2px -2px 5px black, -2px 0 5px black, -2px 2px 5px black,
    0 -2px 5px black, 0 0 5px black, 0 2px 5px black, 2px -2px 5px black,
    2px 0 5px black, 2px 2px 5px black;
  letter-spacing: -0.15rem;
`;
MainText.displayName = 'MainText';
// white-space forces line breaks \n

export const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: calc(100vh - 100px);
  width: 100%;

  ${({ img, position = 'center 15%' }) => css`
    background-image: ${`url(${img})`};
    background-position: ${position};
    background-size: 100%;
    background-repeat: no-repeat;
  `}
`;
PhotoContainer.displayName = 'PhotoContainer';
