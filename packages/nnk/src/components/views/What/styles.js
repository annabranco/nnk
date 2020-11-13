import { styled, css } from 'frontity';
import {
  BaseText,
  BaseTitle,
  sizeLarge,
  sizeLargeTitle
} from '../../../setup/themes';

export const Content = styled.div`
  padding: 20px 80px;
`;
Content.displayName = 'Content';

export const DescriptionArea = styled.div`
  margin-left: 20px;
  width: 80%;
  text-align: justify;
`;
Content.displayName = 'Content';

export const DescriptionTitle = styled(BaseTitle)``;
DescriptionTitle.displayName = 'DescriptionTitle';

export const Image = styled.div`
  height: 160px;
  width: 300px;
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
  font-size: ${sizeLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;
Intro.displayName = 'Intro';

export const Program = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 30px 50px;
`;
Program.displayName = 'Program';

export const Section = styled.section`
  color: ${({ colors }) => colors && colors.secondary};
`;
Section.displayName = 'Section';

export const SubTitle = styled(BaseTitle)`
  margin: 50px auto;
  text-align: center;
  font-size: ${sizeLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};
`;
SubTitle.displayName = 'SubTitle';

export const Text = styled(BaseText)`
  text-align: justify;
  color: ${({ colors }) => colors && colors.secondary};
`;
Text.displayName = 'Text';
