import { styled, css } from 'frontity';
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
  sizeXLargeTitle,
  sizeXXLarge,
  sizeXXLargeTitle
} from '../../../setup/themes';
import { SubscriptionButton } from '../../controllers/MainPage/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: calc(100vh - 155px);
  width: 800px;
  padding: 24px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    height: calc(100vh - 155px);
  }
`;
Container.displayName = 'Container';

export const Content = styled.div`
  padding: 20px;

  @media only screen and (min-width: 1024px) {
    padding: 20px 80px;
  }
`;
Content.displayName = 'Content';

export const Description = styled.div`
  margin: 24px 0;
  line-height: 1.6em;
  white-space: pre;
`;
Description.displayName = 'Description';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2px auto 8px;
  width: 100%;
`;
Field.displayName = 'Field';

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  width: 100%;
  padding: 10px 0;
  color: ${({ colors }) => colors && colors.secondary};

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;
FormArea.displayName = 'FormArea';

export const Icon = styled.i`
  margin-bottom: 15px;
  font-size: ${sizeXLargeTitle};

  ${({ colors, item }) =>
    item === 'Language' &&
    css`
      margin-bottom: 11px;
      border: 2px solid ${colors.secondary};
      border-radius: 50%;
      padding: 10px;
      font-size: ${sizeMediumTitle};

      @media only screen and (min-width: 768px) {
        margin-bottom: 2px;
        font-size: ${sizeXXLarge};
      }

      @media only screen and (min-width: 1200px) {
        margin-bottom: 8px;
        padding: 12px;
        font-size: ${sizeXLarge};
      }
    `}
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeXXLargeTitle};
  }
`;
Icon.displayName = 'Icon';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${({ colors }) => colors && colors.secondary};
  width: 30%;
`;
Info.displayName = 'Info';

export const InfoDescription = styled(BaseTitle)`
  font-size: ${({ subItem }) => (subItem ? sizeLarge : sizeSmallTitle)};
  color: ${({ colors, subItem }) =>
    subItem ? 'gray' : colors && colors.terciary};
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    font-size: ${({ subItem }) => (subItem ? sizeSmallTitle : sizeMediumTitle)};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${({ subItem }) => (subItem ? sizeSmallTitle : sizeLargeTitle)};
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${({ subItem }) => (subItem ? sizeLargeTitle : sizeXLargeTitle)};
  }
`;
InfoDescription.displayName = 'InfoDescription';

export const InfoTitle = styled(BaseTitle)`
  font-size: ${sizeMediumTitle};
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    font-size: ${sizeLarge};
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeLargeTitle};
  }
`;
InfoTitle.displayName = 'InfoTitle';

export const JoinButton = styled(SubscriptionButton)`
  margin: 60px auto;
  width: 85vw;

  @media all and (min-width: 1200px) {
    height: 60px;
    width: 450px;
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    height: 90px;
    width: 800px;
    font-size: ${sizeXLarge};
    border-radius: 30px;
  }
`;
JoinButton.displayName = 'JoinButton';

export const Label = styled.label`
  margin: 5px auto;
  text-transform: uppercase;
  font-size: ${sizeLarge};

  @media only screen and (min-width: 768px) {
    font-size: ${sizeMedium};
  }
`;
Label.displayName = 'Label';

export const MessageField = styled.textarea`
  width: 82%;
  padding: 5px 20px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: ${sizeLarge};
`;
MessageField.displayName = 'MessageField';

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin: 30px auto;
  width: 100%;
  background: yelow;

  @media only screen and (min-width: 768px) {
    margin: 60px auto;
  }
  @media only screen and (min-width: 1024px) {
    width: 60%;
  }
`;
MoreInfo.displayName = 'MoreInfo';

export const JTTFSection = styled.section`
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;
`;
JTTFSection.displayName = 'JTTFSection';

export const SendButton = styled.button`
  margin: 10px auto;
  height: 30px;
  width: 100px;
  color: ${({ colors }) => colors && colors.secondary};
  background: ${({ disabled, colors }) =>
    disabled ? 'gray' : colors && colors.terciary};
  text-transform: uppercase;
  font-size: ${sizeLarge};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  @media only screen and (min-width: 768px) {
    font-size: ${sizeMedium};
  }
`;
SendButton.displayName = 'SendButton';

export const Text = styled(BaseText)`
  margin: 5px auto;
  width: 100%;
  text-align: justify;
  font-size: ${sizeSmallTitle};
  color: ${({ colors }) => colors && colors.secondary};

  @media only screen and (min-width: 768px) {
    margin: 20px auto;
    width: 90%;
    font-size: ${sizeSmallTitle};
  }

  @media only screen and (min-width: 1024px) {
    margin: 20px auto;
    width: 80%;
    font-size: ${sizeLarge};
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeMediumTitle};
  }
`;
Text.displayName = 'Text';

export const TextEmail = styled(BaseText)`
  text-align: center;
  font-size: ${sizeLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;
TextEmail.displayName = 'TextEmail';

export const TextField = styled.input`
  height: 40px;
  width: 82%;
  background: gainsboro;
  padding: 5px 20px;
  font-weight: 700;
  box-sizing: border-box;
  font-size: ${sizeLarge};

  @media only screen and (min-width: 768px) {
    height: 30px;
  }
`;
TextField.displayName = 'TextField';

export const Title = styled(BaseTitle)`
  margin: 0 auto 20px;
  font-size: ${sizeXLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};
`;
Title.displayName = 'Title';
