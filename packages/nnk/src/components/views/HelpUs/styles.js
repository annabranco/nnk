import { styled, css } from 'frontity';
import {
  BaseText,
  BaseTitle,
  fontTitle,
  sizeHugeTitle,
  sizeLarge,
  sizeLargeTitle,
  sizeMedium,
  sizeMediumTitle,
  sizeSmall,
  sizeSmallTitle,
  sizeXLarge,
  sizeXLargeTitle,
  sizeXXLarge
} from '../../../setup/themes';
import { SubscriptionButton } from '../../controllers/MainPage/styles';

export const CampaignPhoto = styled.img`
  width: 100%;
  margin: 12px 0;
  filter: saturate(0.8);

  &: hover {
    filter: saturate(1) brightness(1.2) contrast(1.2);
  }
`;
CampaignPhoto.displayName = 'CampaignPhoto';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    padding: 20px;
  }

  @media only screen and (min-width: 1200px) {
    width: 80%;
    padding: 20px 40px;
  }

  @media only screen and (min-width: 1600px) {
    width: 75%;
    padding: 20px 80px;
  }
`;
Content.displayName = 'Content';

export const DescriptionArea = styled.div`
  margin-left: 20px;
  width: 80%;
  text-align: justify;
`;
DescriptionArea.displayName = 'DescriptionArea';

export const DescriptionTitle = styled(BaseTitle)``;
DescriptionTitle.displayName = 'DescriptionTitle';

export const DonorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  height: 400px;
  width: 100%;
`;
DonorBox.displayName = 'DonorBox';

export const DownloadReportButton = styled(SubscriptionButton)`
  margin: 20px auto;
  width: 200px;
  font-size: ${sizeSmallTitle};
`;

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  padding: 0;
  color: ${({ colors }) => colors && colors.secondary};

  @media only screen and (min-width: 768px) {
    margin: 10px auto;
    padding: 10px 0;
  }
`;
FormArea.displayName = 'FormArea';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 100%;
`;
Field.displayName = 'Field';

export const FooterSeparator = styled.img`
  width: 40px;
`;
FooterSeparator.displayName = 'FooterSeparator';

export const Info = styled.div`
  padding: 20px;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    padding: 20px 80px;
  }
`;
Info.displayName = 'Info';

export const Intro = styled(BaseText)`
  text-align: justify;
  font-size: ${sizeLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;
Intro.displayName = 'Intro';

export const Logo = styled.img`
  margin: 20px;
  height: 60px;

  @media only screen and (min-width: 768px) {
    margin: 20px 0;
    height: 70px;
    cursor: pointer;
  }
`;
Logo.displayName = 'Logo';

export const PartnersLogos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 30px 0;

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
PartnersLogos.displayName = 'PartnersLogos';

export const ReportImage = styled.img`
  margin-top: 100%;
  width: 100%;
`;
ReportImage.displayName = 'ReportImage';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${({ colors }) => colors && colors.secondary};
`;
Section.displayName = 'Section';

export const SubsectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin: 20px;
  }

  @media only screen and (min-width: 1200px) {
    width: 30%;
    margin: 0 30px;

    &:nth-of-type(2) {
      width: 40%;
      margin: 20px 30px 0 -30px;
    }
  }
`;
SubsectionWrapper.displayName = 'SubsectionWrapper';

export const Text = styled(BaseText)`
  text-align: center;
  color: ${({ colors }) => colors && colors.secondary};
  font-size: ${sizeLarge};
  cursor: pointer;

  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeMediumTitle};
  }
`;
Text.displayName = 'Text';

export const TextSmall = styled(BaseText)`
  text-align: center;
`;
TextSmall.displayName = 'TextSmall';

export const Title = styled(BaseTitle)`
  margin-bottom: 10px;
  font-size: ${sizeLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};
  width: fit-content;
`;
Title.displayName = 'Title';

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  background: ${({ colors }) => colors && colors.primary};
  padding: 0 30px;
`;
TitleWrapper.displayName = 'TitleWrapper';

export const ValueDescription = styled(BaseText)`
  font-size: ${sizeLarge};
  text-align: left;
  line-height: 2;
  text-align: justify;
  white-space: pre;

  @media only screen and (min-width: 768px) {
    font-size: ${sizeMedium};
    text-align: center;
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeMediumTitle};
  }
`;
ValueDescription.displayName = 'ValueDescription';

export const ValueItem = styled.div`
  margin: 0 auto;
  padding: 10px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin: 10px auto;
  }
`;
ValueItem.displayName = 'ValueItem';

export const ValueVideo = styled.img`
  margin: 20px auto 10px;
  width: 90%;
  cursor: pointer;

  &: hover {
    filter: brightness(1.4);
  }
`;
ValueVideo.displayName = 'ValueVideo';

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: ${({ colors }) => colors && `4px solid ${colors.terciary}`};
  color: ${({ colors }) => colors && colors.secondary};

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: baseline;
    justify-items: center;
  }
`;
Values.displayName = 'Values';

export const ValueTitle = styled.h3`
  display: block;
  margin: 30px auto;
  font-family: ${fontTitle};
  font-size: ${sizeLargeTitle};
  text-align: justify;
  line-height: 1.5;
  text-align: center;

  @media only screen and (min-width: 768px) {
  }
`;
ValueTitle.displayName = 'ValueTitle';

export const Video = styled.div`
  margin: 20px 0 0;
`;
Video.displayName = 'Video';
