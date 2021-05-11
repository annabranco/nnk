import { styled, css } from 'frontity';
import {
  BaseText,
  sizeLarge,
  sizeMediumTitle,
  sizeSmallTitle,
  sizeXLarge,
  sizeXLargeTitle
} from '../../../../setup/themes';
import { SubscriptionButton } from '../../../controllers/MainPage/styles';

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
    font-size: 1.45rem;
    letter-spacing: -0.05rem;
    text-shadow: -2px -2px 5px black, -2px 0 5px black, -2px 2px 5px black,
      0 -2px 5px black, 0 0 5px black, 0 2px 5px black, 2px -2px 5px black,
      2px 0 5px black, 2px 2px 5px black;
  }

  @media only screen and (min-width: 768px) {
    font-size: ${sizeMediumTitle};
    bottom: 50px;
    right: 6vw;
  }

  @media only screen and (min-width: 1024px) {
    bottom: 20vh;
    font-size: ${sizeMediumTitle};
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeXLarge};
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
  }

  @media (min-width: 1024px) and (min-height: 1300px) {
    height: 40vh;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    height: 90vh;
  }
`;
PhotoContainer.displayName = 'PhotoContainer';

export const VideoButton = styled(SubscriptionButton)`
  position: relative;
  top: 12vh;
  right: -10vh;
  border-radius: 25px;
  box-shadow: 5px 0 15px 3px rgba(0, 0, 0, 0.8);
  -webkit-text-stroke: 1px black;
  height: 40px;
  width: 60%;

  & i {
    margin-left: 10px;
  }

  @media all and (min-width: 768px) {
    top: 10vh;
  }

  @media all and (min-width: 1200px) {
    top: 0;
    right: -20vw;
    height: 60px;
    width: 350px;
  }

  @media all and (min-width: 1400px) {
    top: -5vh;
    right: -25vw;
    height: 60px;
    width: 450px;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    border-radius: 50px;
    right: -30vw;
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
