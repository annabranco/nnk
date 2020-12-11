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
    flex-direction: row;
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

export const FooterText = styled(BaseTitle)`
  font-size: ${sizeXLargeTitle};
  letter-spacing: 0.5rem;
`;
FooterText.displayName = 'FooterText';

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

export const Instructions = styled(BaseText)`
  font-size: ${sizeLarge};

  @media only screen and (min-width: 375px) {
    font-size: ${sizeLargeTitle};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${sizeMedium};
  }
`;
Instructions.displayName = 'Instructions';

export const Intro = styled(BaseText)`
  text-align: justify;
  font-size: ${sizeLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;
Intro.displayName = 'Intro';

export const ItemDescription = styled.span`
  display: block;

  margin-left: 15px;
  font-family: ${fontTitle};
  font-size: ${sizeLarge};
  text-align: justify;
  line-height: 1.5;
  font-weight: 400;

  @media only screen and (min-width: 375px) {
    font-size: ${sizeLargeTitle};
  }

  @media only screen and (min-width: 768px) {
    display: inline;
    font-size: ${sizeLarge};
  }
`;
ItemDescription.displayName = 'ItemDescription';

export const ItemTitle = styled(Instructions)`
  margin-left: 20px;

  @media only screen and (min-width: 768px) {
    margin-left: 0;
  }
`;
ItemTitle.displayName = 'ItemTitle';

export const Label = styled.label`
  display: none;
`;
Label.displayName = 'Label';

export const Logo = styled.img`
  margin: 20px;
  height: 60px;

  @media only screen and (min-width: 768px) {
    margin: 20px 40px;
    height: 70px;
  }
`;
Logo.displayName = 'Logo';

export const Map = styled.img`
  width: 100%;
`;
Map.displayName = 'Map';

export const PartnersLogos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
PartnersLogos.displayName = 'PartnersLogos';

export const Program = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 30px 50px;
`;
Program.displayName = 'Program';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${({ colors }) => colors && colors.secondary};
`;
Section.displayName = 'Section';

export const SectionFooter = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 40px;
  padding: 30px 5px;

  ${({ colors }) =>
    colors &&
    css`
      border-radius: 5px;
      border-top: 2px solid ${colors.secondary};
      border-bottom: 4px solid ${colors.secondary};
    `};

  @media only screen and (min-width: 768px) {
    display: flex;
    width: 90%;
  }

  @media only screen and (min-width: 1200px) {
    display: flex;
    width: 60%;
  }
`;
SectionFooter.displayName = 'SectionFooter';

export const SendButton = styled.button`
  margin: 10px auto;
  height: 30px;
  width: 160px;
  border-radius: 5px;
  color: ${({ colors }) => colors && colors.secondary};
  background: ${({ disabled, colors }) =>
    disabled ? 'gray' : colors && colors.terciary};
  text-transform: uppercase;
  font-size: ${sizeLarge};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  @media only screen and (min-width: 375px) {
    font-size: ${sizeLarge};
    height: 40px;
  }

  @media only screen and (min-width: 768px) {
    width: 100px;
    border-radius: 10;
    font-size: ${sizeSmall};
  }
`;
SendButton.displayName = 'SendButton';

export const Subscription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  padding: 10px 0 0 90px;
  border: 1px solid gray;
  height: 305px;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    margin-top: 40px;
    height: 260px;
  }
`;
Subscription.displayName = 'Subscription';

export const SubscriptionTitle = styled(BaseTitle)`
  color: ${({ colors }) => colors && colors.secondary};
  font-size: ${sizeLargeTitle};

  @media only screen and (min-width: 375px) {
    font-size: ${sizeXLarge};
  }

  @media only screen and (min-width: 768px) {
    margin-top: 20px;
    font-size: ${sizeMediumTitle};
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 0;
    font-size: ${sizeMediumTitle};
  }
`;
SubscriptionTitle.displayName = 'SubscriptionTitle';

export const SubscriptionTitleHighlight = styled(BaseTitle)`
  color: ${({ colors }) => colors && colors.terciary};
  font-size: ${sizeLargeTitle};

  @media only screen and (min-width: 375px) {
    font-size: ${sizeXXLarge};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${sizeMediumTitle};
  }
`;
SubscriptionTitleHighlight.displayName = 'SubscriptionTitleHighlight';

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

export const TextField = styled.input`
  height: 40px;
  width: 100%;
  background: gainsboro;
  padding: 0 10px;
  font-weight: 400;
  box-sizing: border-box;
  font-size: ${sizeMediumTitle};

  @media only screen and (min-width: 768px) {
    height: 30px;
    width: 90%;
    padding: 5px 20px;
    font-size: ${sizeMedium};
  }
`;
TextField.displayName = 'TextField';

export const Title = styled(BaseTitle)`
  font-size: ${sizeHugeTitle};
  color: ${({ colors }) => colors && colors.secondary};
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

export const TransferInfo = styled.div`
  margin: 30px auto;
  width: 100%;
  background: ${({ colors }) => colors && colors.terciary};
  padding: 10px;
  text-align: left;
  color: ${({ colors }) => colors && colors.secondary};
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    text-align: center;
    border-radius: 5px;
  }

  @media only screen and (min-width: 1200px) {
    width: 70%;
    text-align: center;
    border-radius: 0;
  }
`;
TransferInfo.displayName = 'TransferInfo';

export const ValueDescription = styled(BaseText)`
  font-size: ${sizeSmallTitle};
  text-align: left;
  line-height: 2;

  @media only screen and (min-width: 768px) {
    font-size: ${sizeMedium};
    text-align: justify;
  }
`;
ValueDescription.displayName = 'ValueDescription';

export const ValueItem = styled.div`
  margin: 0 auto;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    margin: 10px auto;
  }
`;
ValueItem.displayName = 'ValueItem';

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ colors }) => colors && colors.secondary};
`;
Values.displayName = 'Values';

export const ValueTitle = styled.span`
  display: block;
  margin-right: 15px;
  font-family: ${fontTitle};
  font-size: ${sizeLargeTitle};
  text-align: justify;
  line-height: 1.5;

  @media only screen and (min-width: 768px) {
    display: inline;
    font-size: ${sizeSmallTitle};
  }
`;
ValueTitle.displayName = 'ValueTitle';
