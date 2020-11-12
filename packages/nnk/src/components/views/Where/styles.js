import { styled, css } from 'frontity';
import {
  BaseText,
  BaseTitle,
  sizeHugeTitle,
  sizeLarge,
  sizeLargeTitle
} from '../../../setup/themes';

export const Content = styled.div`
  padding: 20px 80px;
`;

export const DescriptionArea = styled.div`
  margin-left: 20px;
  width: 80%;
  text-align: justify;
`;
export const DescriptionTitle = styled(BaseTitle)``;

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

export const Intro = styled(BaseText)`
  text-align: justify;
  font-size: ${sizeLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;

export const Map = styled.img`
  width: 100%;
`;

export const Program = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 30px 50px;
`;

export const Section = styled.section`
  color: ${({ colors }) => colors && colors.secondary};
`;

export const SubTitle = styled(BaseTitle)`
  margin: 50px auto;
  text-align: center;
  font-size: ${sizeLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};
`;

export const Text = styled(BaseText)`
  text-align: justify;
  color: ${({ colors }) => colors && colors.secondary};
`;

export const Title = styled(BaseTitle)`
  font-size: ${sizeHugeTitle};
  color: ${({ colors }) => colors && colors.secondary};
  width: fit-content;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  background: ${({ colors }) => colors && colors.primary};
  padding: 0 30px;
`;
