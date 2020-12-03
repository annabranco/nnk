import { styled, css } from 'frontity';
import {
  BaseText,
  BaseTitle,
  sizeHugeTitle,
  sizeLarge,
  sizeLargeTitle,
  sizeSmallTitle,
  sizeMediumTitle,
  fontTitle,
  sizeMedium
} from '../../../setup/themes';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 20px 80px;
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

export const Map = styled.img`
  width: 100%;
`;
Map.displayName = 'Map';

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

export const SubsectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;

  &:last-child {
    width: 35%;
  }
`;
SubsectionWrapper.displayName = 'SubsectionWrapper';

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ colors }) => colors && colors.secondary};
`;
Values.displayName = 'Values';

export const ValueTitle = styled.span`
  margin-right: 15px;
  font-family: ${fontTitle};
  font-size: ${sizeSmallTitle};
  text-align: justify;
  line-height: 1.5;
`;
ValueTitle.displayName = 'ValueTitle';

export const ValueDescription = styled(BaseText)`
  font-size: 1rem;
  text-align: justify;
  line-height: 2;
`;
ValueDescription.displayName = 'ValueDescription';

export const PartnersLogos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
PartnersLogos.displayName = 'PartnersLogos';

export const Logo = styled.img`
  width: 100px;
`;
Logo.displayName = 'Logo';

export const TransferInfo = styled.div`
  background: red;
  padding: 10px;
  color: ${({ colors }) => colors && colors.secondary};
`;
TransferInfo.displayName = 'TransferInfo';

export const Instructions = styled(BaseText)``;
Instructions.displayName = 'Instructions';

export const ItemTitle = styled(Instructions)``;
ItemTitle.displayName = 'ItemTitle';

export const ItemDescription = styled.span`
  margin-left: 15px;
  font-family: ${fontTitle};
  font-size: ${sizeLarge};
  text-align: justify;
  line-height: 1.5;
  font-weight: 400;
`;
ItemDescription.displayName = 'ItemDescription';

export const DonorBox = styled.div`
  border: 1px solid black;
`;
DonorBox.displayName = 'DonorBox';

export const Subscription = styled.div`
  border: 1px solid black;
`;
Subscription.displayName = 'Subscription';

export const ValueItem = styled.div`
  margin: 10px auto;
  padding: 10px;
`;
ValueItem.displayName = 'ValueItem';
