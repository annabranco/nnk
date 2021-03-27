import { styled, css } from 'frontity';
import {
  BaseText,
  sizeLarge,
  sizeLargeTitle,
  sizeMediumTitle
} from '../../../../setup/themes';

export const MainText = styled(BaseText)`
  position: absolute;
  bottom: 0;
  right: 4vw;
  white-space: pre;
  font-size: ${sizeLarge};
  font-style: italic;
  font-weight: 900;
  line-height: 1.5;
  border-radius: 10px;
  padding: 5px 10px;
  text-shadow: -2px -2px 2px black, -2px 0 2px black, -2px 2px 2px black,
    0 -2px 2px black, 0 0 2px black, 0 2px 2px black, 2px -2px 2px black,
    2px 0 2px black, 2px 2px 2px black;
  letter-spacing: -0.1rem;
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;

  @media only screen and (min-height: 400px) {
    bottom: 10px;
  }

  @media only screen and (min-width: 375px) {
    font-size: ${sizeMediumTitle};
    letter-spacing: -0.15rem;
    text-shadow: -2px -2px 5px black, -2px 0 5px black, -2px 2px 5px black,
      0 -2px 5px black, 0 0 5px black, 0 2px 5px black, 2px -2px 5px black,
      2px 0 5px black, 2px 2px 5px black;
  }

  @media only screen and (min-width: 768px) {
    bottom: 50px;
    right: 6vw;
  }

  @media only screen and (min-width: 1024px) {
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
  height: 70vh;
  width: 100%;
  background-position: 20% 8%;
  border-bottom: 4px solid ${({ colors }) => colors && colors.terciary};

  ${({ img, section }) => css`
    background-image: ${`url(${img})`};
    background-size: ${section ? '100%' : '200%'};
    background-repeat: no-repeat;
  `}

  @media only screen and (min-height: 400px) {
    height: ${({ section }) => (section ? '41vh' : '60vh')};
    background-position: 20% 15%;
  }

  @media only screen and (min-width: 768px) {
    height: 45vh;

    ${({ position = '10% 15%' }) => css`
      background-position: ${position};
      background-size: 150%;
    `}
  }
  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 100px);

    ${({ position = 'center 15%' }) => css`
      background-position: ${position};
      background-size: 100%;
    `}
  }
`;
PhotoContainer.displayName = 'PhotoContainer';
