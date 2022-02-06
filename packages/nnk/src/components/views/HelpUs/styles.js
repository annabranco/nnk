import { styled } from 'frontity';
import {
  BaseText,
  BaseTitle,
  fontTitle,
  sizeLarge,
  sizeLargeTitle,
  sizeMedium,
  sizeMediumTitle,
  sizeSmallTitle,
  sizeXLarge,
  sizeXLargeTitle
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
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 40px;

  @media only screen and (min-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 1200px) {
    width: 90%;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px 0;
  }

  @media only screen and (min-width: 1600px) {
    width: 100%;
    padding: 20px 0;
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

export const HelpUsButton = styled(SubscriptionButton)`
  margin: 20px auto 40px;
  height: 60px;
  width: 80%;
  font-size: ${sizeSmallTitle};

  @media all and (min-width: 768px) {
    height: 70px;
    width: 65vw;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    height: 90px;
    width: 65vw;
    font-size: ${sizeXLarge};
    border-radius: 30px;
  }
`;
HelpUsButton.displayName = 'HelpUsButton';

export const HelpUsImage = styled.div`
  height: 42%;
  width: 100%;
  background-image: ${({ imgs }) => `url(${imgs[0]})`};
  background-position: 10% 20%;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (min-width: 1024px) {
    background-image: ${({ imgs }) => `url(${imgs[1]})`};
  }

  @media only screen and (min-width: 1600px) {
    background-position: 10% 35%;
  }

  @media only screen and (min-width: 2000px) {
    background-position: 10% 43%;
  }
`;
HelpUsImage.displayName = 'HelpUsImage';

export const Info = styled.div`
  padding: 20px;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    padding: 20px 80px;
  }
`;
Info.displayName = 'Info';

export const Intro = styled(BaseText)`
  margin-top: 20px;
  text-align: justify;
  font-size: ${sizeLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;
Intro.displayName = 'Intro';

export const Logo = styled.img`
  margin: 20px;
  height: 30px;

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

  @media all and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
PartnersLogos.displayName = 'PartnersLogos';

export const ReportImage = styled.img`
  margin-top: 20%;
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
    width: 80%;
    margin: 20px;
  }

  @media only screen and (min-width: 1200px) {
    width: 50%;
    margin: 0 20px;
    padding: inherit;

    &:nth-of-type(2) {
      justify-content: flex-start;
      align-items: flex-start;
      width: 50%;
      margin: 0 5vw 0 10vw;
    }
  }
  @media only screen and (min-width: 1600px) {
    &:nth-of-type(2) {
      justify-content: flex-start;
      align-items: flex-start;
      width: 50%;
      margin: 0 10vw 0 5vw;
    }
  }
  @media only screen and (min-width: 1900px) {
    &:nth-of-type(2) {
      justify-content: flex-start;
      align-items: flex-start;
      width: 50%;
      margin: 0 15vw 0 5vw;
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

export const ThankYouText = styled(Intro)`
  margin: 40px 0 20px;
  text-align: left;
`;
ThankYouText.displayName = 'ThankYouText';

export const Title = styled(BaseTitle)`
  margin-bottom: 40px;
  text-align: left;
  font-size: ${sizeXLargeTitle};
  color: #17bc9d;
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

  @media only screen and (min-width: 768px) {
    font-size: ${sizeMedium};
    text-align: center;
    white-space: pre;
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
    margin: 0 auto 10px;
    padding: 0 10px 10px;
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

  @media all and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: baseline;
    justify-items: center;
    padding-bottom: 20px;
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
  cursor: pointer;
`;
Video.displayName = 'Video';
