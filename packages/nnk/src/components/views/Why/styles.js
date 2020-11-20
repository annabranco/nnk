import { styled, css } from 'frontity';
import {
  BaseText,
  BaseTitle,
  fontText,
  sizeLarge,
  sizeLargeTitle,
  sizeXLargeTitle
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

export const BorderViolenceArea = styled(WhyArea)``;
BorderViolenceArea.displayName = 'BorderViolenceArea';

export const Content = styled.div`
  padding: 20px 80px;
`;
Content.displayName = 'Content';

export const Intro = styled(BaseText)`
  text-align: justify;
  font-size: ${sizeLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;
Intro.displayName = 'Intro';

export const LatestReportsArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
LatestReportsArea.displayName = 'LatestReportsArea';

export const Photo = styled.div`
  margin: 20px auto;
  height: 200px;
  width: 200px;
  overflow: hidden;
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

export const ReportLink = styled(Link)`
  margin: 40px auto 20px;
  font-size: ${sizeLarge};
  font-family: ${fontText};
  color: ${({ colors }) => colors && colors.secondary};
  text-decoration: none;
  cursor: pointer;
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
  width: 50%;
`;
TestimonialArea.displayName = 'TestimonialArea';

export const Text = styled(BaseText)`
  text-align: justify;
  color: ${({ colors }) => colors && colors.secondary};
`;
Text.displayName = 'Text';

export const TextTestimonial = styled(Text)`
  text-align: center;
  font-size: ${sizeLarge};
  font-style: italic;
`;
Intro.displayName = 'Intro';

export const TextVictim = styled(Text)`
  margin: 20px auto;
  text-align: center;
  font-size: ${sizeLarge};
  font-weight: 700;
`;
Intro.displayName = 'Intro';

export const Title = styled(BaseTitle)`
  margin: 50px auto;
  font-size: ${sizeXLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};
`;
Title.displayName = 'Title';
