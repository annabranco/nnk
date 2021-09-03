import { styled, css } from 'frontity';
import {
  BaseText,
  BaseTitle,
  sizeLarge,
  sizeLargeTitle,
  sizeMedium,
  sizeMediumTitle,
  sizeSmallTitle,
  sizeXLargeTitle
} from '../../../setup/themes';

export const Content = styled.div`
  padding: 20px;

  @media only screen and (min-width: 768px) {
    padding: 20px 80px;
  }
`;
Content.displayName = 'Content';

export const DescriptionArea = styled.div`
  width: 100%;
  text-align: justify;

  @media only screen and (min-width: 1024px) {
    margin-left: 20px;
    width: 80%;
  }
`;
Content.displayName = 'Content';

export const DescriptionTitle = styled(BaseTitle)`
  margin: -10px auto 10px;
  font-size: ${sizeLargeTitle};

  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.5), -1px 0 1px rgba(0, 0, 0, 0.5),
    -1px 1px 1px rgba(0, 0, 0, 0.5), 0 -1px 1px rgba(0, 0, 0, 0.5),
    0 0 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),
    1px -1px 1px rgba(0, 0, 0, 0.5), 1px 0 1px rgba(0, 0, 0, 0.5),
    1px 1px 1px rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 768px) {
    margin: -20px auto 10px;
    font-size: ${sizeXLargeTitle};
    text-shadow: none;
  }

  @media only screen and (min-width: 1024px) {
    margin: 0;
    font-size: ${sizeMediumTitle};
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeLargeTitle};
  }
`;
DescriptionTitle.displayName = 'DescriptionTitle';

export const Image = styled.div`
  height: 140px;
  width: 100%;

  ${({ img }) =>
    css`
      border-radius: 5px;
      background-image: ${`url(${img})`};
      background-position: center center;
      background-size: 100%;
      background-repeat: no-repeat;
    `}

  @media only screen and (min-width: 768px) {
    height: 300px;
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    height: 320px;
    width: 600px;
    background-position: unset;
  }
`;
Image.displayName = 'Image';

export const Intro = styled(BaseText)`
  text-align: center;
  font-size: ${sizeSmallTitle};
  color: ${({ colors }) => colors && colors.secondary};

  @media only screen and (min-width: 1200px) {
    font-size: ${sizeLarge};
    white-space: pre;
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeMediumTitle};
  }
`;
Intro.displayName = 'Intro';

export const Program = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px auto 30px;
  /* max-width: 80vw; */

  @media only screen and (min-width: 768px) {
    margin: 20px auto 50px;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    margin: 50px 0;
  }

  @media only screen and (min-width: 1200px) {
    margin: 30px auto;
    width: 80%;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    margin: 150px auto;
  }
`;
Program.displayName = 'Program';

export const Section = styled.section`
  color: ${({ colors }) => colors && colors.secondary};
`;
Section.displayName = 'Section';

export const SubTitle = styled(BaseTitle)`
  margin: 40px auto 10px;
  text-align: center;
  font-size: ${sizeLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};

  @media only screen and (min-width: 768px) {
    margin: 50px auto;
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeXLargeTitle};
  }
`;
SubTitle.displayName = 'SubTitle';

export const Text = styled(BaseText)`
  text-align: justify;
  color: ${({ colors }) => colors && colors.secondary};
  font-size: ${sizeSmallTitle};

  @media only screen and (min-width: 1024px) {
    font-size: ${sizeMedium};
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeMediumTitle};
  }
`;
Text.displayName = 'Text';
