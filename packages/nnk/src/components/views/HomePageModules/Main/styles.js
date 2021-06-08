import { styled, css } from 'frontity';
import {
  BaseText,
  sizeLarge,
  sizeMedium,
  sizeMediumTitle,
  sizeSmallTitle,
  sizeXLarge,
  sizeXLargeTitle
} from '../../../../setup/themes';
import { SubscriptionButton } from '../../../controllers/MainPage/styles';

export const MainText = styled(BaseText)`
  font-size: ${sizeLarge};
  font-style: italic;
  font-weight: 900;
  line-height: 1.5;
  text-shadow: -2px -2px 2px black, -2px 0 2px black, -2px 2px 2px black,
    0 -2px 2px black, 0 0 2px black, 0 2px 2px black, 2px -2px 2px black,
    2px 0 2px black, 2px 2px 2px black;
  letter-spacing: -0.1rem;
  color: ${({ colors }) => colors && colors.secondary};

  @media only screen and (min-width: 375px) {
    font-size: 1.45rem;
    letter-spacing: -0.05rem;
    text-shadow: -2px -2px 5px black, -2px 0 5px black, -2px 2px 5px black,
      0 -2px 5px black, 0 0 5px black, 0 2px 5px black, 2px -2px 5px black,
      2px 0 5px black, 2px 2px 5px black;
  }

  @media only screen and (min-width: 768px) {
    font-size: ${sizeLarge};
    white-space: unset;
  }

  @media only screen and (min-width: 1024px) {
    white-space: pre;

    font-size: ${sizeSmallTitle};
  }

  @media only screen and (min-width: 1600px) {
    font-size: ${sizeMediumTitle};
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeXLarge};
  }
`;
MainText.displayName = 'MainText';

export const MainTextWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 3vw;
  text-align: center;
  width: 65vw;

  @media only screen and (min-width: 768px) {
    width: 75vw;
    bottom: 50px;
    right: 4vw;
  }

  @media only screen and (min-width: 1024px) {
    width: 45vw;
    right: 2vw;
    bottom: 20vh;
  }

  @media only screen and (min-width: 1600px) {
    right: 3vw;
    bottom: 20vh;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    right: 6vw;
  }
`;
MainText.displayName = 'MainText';

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
    background-image: ${`url(${img[0]})`};
    background-size: ${section ? '100%' : '200%'};
    background-repeat: no-repeat;
  `}

  @media only screen and (min-height: 400px) {
    height: ${({ section }) => (section ? '35vh' : '60vh')};
    background-position: 20% 15%;
  }

  @media only screen and (min-height: 411px) {
    height: ${({ section }) => (section ? '35vh' : '50vh')};
  }

  @media only screen and (min-height: 60px) {
    height: ${({ section }) => (section ? '28vh' : '40vh')};
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

    ${({ img }) => css`
      background-image: ${`url(${img[1]})`};
    `}
  }

  @media (min-width: 1024px) and (min-height: 1300px) {
    height: 40vh;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    height: 90vh;
  }

  @media only screen and (min-width: 2400px) {
    ${({ img }) => css`
      background-image: ${`url(${img[2]})`};
    `}
  }
`;
PhotoContainer.displayName = 'PhotoContainer';

export const VideoButton = styled(SubscriptionButton)`
  position: absolute;
  bottom: -25vw;
  right: 3vw;
  border-radius: 25px;
  box-shadow: 5px 0 15px 3px rgba(0, 0, 0, 0.8);
  -webkit-text-stroke: 1px black;
  height: 40px;
  width: 100%;

  & i {
    margin-left: 10px;
  }

  @media all and (min-width: 360px) {
    bottom: -21vw;
    width: 95%;
  }

  @media all and (min-width: 400px) {
    bottom: -18vw;
  }

  @media all and (min-width: 768px) {
    bottom: -17vw;
    width: 60%;
  }

  @media all and (min-width: 1024px) {
    right: 2vw;
  }

  @media all and (min-width: 1200px) {
    bottom: -9vw;
    right: 8vw;
    height: 60px;
    width: 350px;
  }

  @media all and (min-width: 1600px) {
    bottom: -7vw;
    right: 9vw;
    height: 60px;
    width: 450px;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    border-radius: 50px;
    height: 100px;
    width: 600px;
    font-size: ${sizeXLargeTitle};
  }
`;
VideoButton.displayName = 'VideoButton';

export const VideoElement = styled.iframe`
  position: relative;
  top: 0;
  width: 80%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 5px 0 50px 50px rgba(0, 0, 0, 0.8);

  @media all and (min-width: 1200px) {
    height: 90%;
    width: 80%;
  }
`;
VideoElement.displayName = 'VideoElement';
