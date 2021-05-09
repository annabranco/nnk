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

export const CampaignPhoto = styled.img`
  width: 100%;
  margin: 12px 0;
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

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
PartnersLogos.displayName = 'PartnersLogos';

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
  justify-content: center;
  margin: 0;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin: 20px;
  }

  @media only screen and (min-width: 1200px) {
    width: 60%;
    margin: 20px 30px;

    &:last-child {
      width: 40%;
    }
  }
`;
SubsectionWrapper.displayName = 'SubsectionWrapper';

export const Text = styled(BaseText)`
  text-align: center;
  color: ${({ colors }) => colors && colors.secondary};
`;
Text.displayName = 'Text';

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
  font-size: ${sizeSmallTitle};
  text-align: left;
  line-height: 2;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: ${sizeMedium};
    text-align: center;
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
