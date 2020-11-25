import { styled, css } from 'frontity';
import {
  BaseText,
  BaseTitle,
  sizeLarge,
  sizeLargeTitle,
  sizeMedium,
  sizeMediumTitle,
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

export const Content = styled.div`
  padding: 20px 80px;
`;
Content.displayName = 'Content';

export const Text = styled(BaseText)`
  margin: 20px auto 20px;
  width: 80%;
  text-align: justify;
  font-size: ${sizeLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;
Text.displayName = 'Text';

export const Section = styled.section`
  color: ${({ colors }) => colors && colors.secondary};
`;
Section.displayName = 'Section';

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 60px auto;
  width: 60%;
  background: yelow;
`;
MoreInfo.displayName = 'MoreInfo';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ colors }) => colors && colors.secondary};
`;
Info.displayName = 'Info';

export const Icon = styled.i`
  margin-bottom: 15px;
  font-size: ${sizeXLargeTitle};

  ${({ colors, item }) =>
    item === 'Language' &&
    css`
      margin-bottom: 10px;
      border: 2px solid ${colors.secondary};
      border-radius: 50%;
      padding: 18px;
      font-size: ${sizeMediumTitle};
    `}
`;
Icon.displayName = 'Icon';

export const InfoTitle = styled(BaseTitle)`
  font-size: ${sizeLarge};
  text-transform: uppercase;
`;
InfoTitle.displayName = 'InfoTitle';

export const InfoDescription = styled(BaseTitle)`
  font-size: ${sizeLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};
  text-transform: uppercase;
`;
InfoDescription.displayName = 'InfoDescription';

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  width: 80%;
  padding: 10px 0;
  color: ${({ colors }) => colors && colors.secondary};
`;
FormArea.displayName = 'FormArea';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2px auto 8px;
  width: 100%;
`;
Field.displayName = 'Field';

export const Label = styled.label`
  margin: 5px auto;
  text-transform: uppercase;
`;
Label.displayName = 'Label';

export const TextField = styled.input`
  height: 30px;
  width: 82%;
  background: gainsboro;
  padding: 5px 20px;
  font-weight: 700;
  box-sizing: border-box;
  font-size: ${sizeLarge};
`;
TextField.displayName = 'TextField';

export const MessageField = styled.textarea`
  width: 82%;
  padding: 5px 20px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: ${sizeLarge};
`;
MessageField.displayName = 'MessageField';

export const SendButton = styled.button`
  margin: 10px auto;
  height: 30px;
  width: 100px;
  color: ${({ colors }) => colors && colors.secondary};
  background: ${({ disabled, colors }) =>
    disabled ? 'gray' : colors && colors.terciary};
  text-transform: uppercase;
  font-size: ${sizeMedium};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
SendButton.displayName = 'SendButton';

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
`;
Container.displayName = 'Container';

export const Title = styled(BaseTitle)`
  margin: 0 auto 20px;
  font-size: ${sizeXLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};
`;
Title.displayName = 'Title';

export const Description = styled.div`
  margin: 24px 0;
  line-height: 1.6em;
  white-space: pre;
`;
Description.displayName = 'Description';

export const TextEmail = styled(BaseText)`
  text-align: center;
  font-size: ${sizeLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;
TextEmail.displayName = 'TextEmail';
