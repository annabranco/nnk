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

  @media only screen and (min-width: 768px) {
    margin: -20px auto 10px;
    font-size: ${sizeXLargeTitle};
  }

  @media only screen and (min-width: 1024px) {
    margin: 0;
    font-size: ${sizeMediumTitle};
  }
`;
DescriptionTitle.displayName = 'DescriptionTitle';

export const Image = styled.div`
  height: 140px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    height: 300px;
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    height: 160px;
    width: 300px;
  }

  ${({ img }) =>
    css`
      border-radius: 5px;
      background-image: ${`url(${img})`};
      background-position: center center;
      background-size: 100%;
      background-repeat: no-repeat;
    `}
`;
Image.displayName = 'Image';

export const Intro = styled(BaseText)`
  text-align: justify;
  font-size: ${sizeSmallTitle};
  color: ${({ colors }) => colors && colors.secondary};

  @media only screen and (min-width: 1200px) {
    font-size: ${sizeLarge};
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
    flex-direction: row;
    margin: 30px 0;
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
`;
SubTitle.displayName = 'SubTitle';

export const Text = styled(BaseText)`
  text-align: justify;
  color: ${({ colors }) => colors && colors.secondary};
  font-size: ${sizeSmallTitle};

  @media only screen and (min-width: 1024px) {
    font-size: ${sizeMedium};
  }
`;
Text.displayName = 'Text';
