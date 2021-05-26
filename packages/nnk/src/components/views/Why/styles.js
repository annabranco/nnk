import { styled, css } from 'frontity';
import {
  BaseText,
  BaseTitle,
  fontText,
  sizeLarge,
  sizeLargeTitle,
  sizeMediumTitle,
  sizeSmallTitle,
  sizeXLargeTitle,
  sizeXXLarge
} from '../../../setup/themes';
import Link from '../../core/Link';

const WhyArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  text-align: justify;
`;

export const BlackBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 60px;
  border-radius: 5px;
  width: 80%;
`;
BlackBookContainer.displayName = 'BlackBookContainer';

export const BlackBookPhoto = styled.img`
  display: inline-block;
  width: 60%;
  margin: -30px auto -50px;
`;
BlackBookPhoto.displayName = 'BlackBookPhoto';

export const BlackBookVolumesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20px auto;
  width: 60%;
`;
BlackBookContainer.displayName = 'BlackBookContainer';

export const BorderViolenceArea = styled(WhyArea)`
  max-width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 80%;
  }
`;
BorderViolenceArea.displayName = 'BorderViolenceArea';

export const Content = styled.div`
  padding: 20px;

  @media only screen and (min-width: 768px) {
    padding: 20px 80px;
  }
`;
Content.displayName = 'Content';

export const Intro = styled(BaseText)`
  text-align: justify;
  font-size: ${sizeSmallTitle};
  color: ${({ colors }) => colors && colors.secondary};
  font-weight: ${({ volumes }) => volumes && 700};

  @media only screen and (min-width: 1200px) {
    font-size: ${sizeLarge};
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeMediumTitle};
  }

  & a {
    text-decoration: none;
    color: ${({ colors }) => colors && colors.terciary};

    &:hover: {
      color: ${({ colors }) => colors && colors.terciary};
    }
  }
  & span {
    font-style: italic;
  }
`;
Intro.displayName = 'Intro';

export const LatestReportsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;
LatestReportsArea.displayName = 'LatestReportsArea';

export const Photo = styled.div`
  margin: 20px auto;
  height: 150px;
  width: 150px;
  overflow: hidden;

  @media only screen and (min-width: 1200px) {
    height: 200px;
    width: 200px;
  }

  ${({ img }) =>
    css`
      border-radius: 50%;
      background-image: ${`url(${img})`};
      background-position: left top;
      background-size: 105%;
      background-repeat: no-repeat;
    `}
`;
Photo.displayName = 'Photo';

export const RecentArea = styled(WhyArea)``;
RecentArea.displayName = 'RecentArea';

export const ReportLink = styled.a`
  margin: 40px auto 20px;
  font-size: ${sizeLarge};
  font-family: ${fontText};
  color: ${({ colors }) => colors && colors.secondary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ colors }) => colors && colors.terciary};
    font-weight: 700;
  }
`;
ReportLink.displayName = 'ReportLink';

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

export const TestimonialArea = styled(WhyArea)`
  margin: 20px auto;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
`;
TestimonialArea.displayName = 'TestimonialArea';

export const Text = styled(BaseText)`
  text-align: justify;
  color: ${({ colors }) => colors && colors.secondary};
`;
Text.displayName = 'Text';

export const TextTestimonial = styled(Text)`
  text-align: center;
  font-size: ${sizeSmallTitle};
  font-style: italic;

  @media only screen and (min-width: 1200px) {
    font-size: ${sizeLarge};
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeMediumTitle};
  }
`;
Intro.displayName = 'Intro';

export const TextVictim = styled(Text)`
  margin: 20px auto;
  text-align: center;
  font-size: ${sizeSmallTitle};
  font-weight: 700;

  @media only screen and (min-width: 1200px) {
    font-size: ${sizeLarge};
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeMediumTitle};
  }
`;
Intro.displayName = 'Intro';

export const Title = styled(BaseTitle)`
  margin: 50px auto;
  font-size: ${sizeXXLarge};
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;

  @media only screen and (min-width: 1200px) {
    font-size: ${sizeLargeTitle};
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeXLargeTitle};
  }
`;
Title.displayName = 'Title';
