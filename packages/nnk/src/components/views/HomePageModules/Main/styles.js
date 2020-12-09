import { styled, css } from 'frontity';
import {
  BaseText,
  sizeLargeTitle,
  sizeMediumTitle,
  sizeSmallTitle
} from '../../../../setup/themes';

export const MainText = styled(BaseText)`
  position: absolute;
  bottom: 10px;
  right: 6vw;
  white-space: pre;
  font-size: ${sizeSmallTitle};
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
  color: ${({ colors }) => colors && colors.secondary};

  @media only screen and (min-width: 375px) {
    font-size: ${sizeMediumTitle};
  }

  @media only screen and (min-width: 768px) {
    bottom: 15vh;
    font-size: ${sizeLargeTitle};
  }
`;
MainText.displayName = 'MainText';
// white-space forces line breaks \n

export const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 50vh;
  width: 100%;
  background-position: 20% 15%;

  ${({ img }) => css`
    background-image: ${`url(${img})`};
    background-size: 200%;
    background-repeat: no-repeat;
  `}

  @media only screen and (min-width: 768px) {
    height: calc(100vh - 100px);

    ${({ position = 'center 15%' }) => css`
      background-position: ${position};
      background-size: 100%;
    `}
  }
`;
PhotoContainer.displayName = 'PhotoContainer';
