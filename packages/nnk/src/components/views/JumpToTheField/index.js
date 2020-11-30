import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import SectionHeader from '../SectionHeader';
import { getSocialLinks, validateForm } from '../../../utils';
import { JTTF_TEXTS } from '../../../db';
import { VolunteersInAction } from '../../../assets/images';
import {
  Content,
  Text,
  Section,
  MoreInfo,
  Info,
  Icon,
  InfoTitle,
  InfoDescription,
  FormArea,
  Field,
  Label,
  TextField,
  SendButton,
  MessageField,
  Container,
  Title,
  Description,
  TextEmail
} from './styles';
import { StatePropType } from '../../../types';

const INITIAL_FORM_DATA = {
  name: {
    value: null,
    isValid: false
  },
  email: {
    value: null,
    isValid: false
  },
  message: {
    value: null,
    isValid: false
  }
};

const JumpToTheFieldSection = ({ state }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [emailSent, toggleEmailSent] = useState(false);

  const { colors, language } = state.theme;
  let texts = JTTF_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  const sendEmail = event => {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    Email.send({
      SecureToken: 'a8424171-6a2c-42f8-a17e-24ff3da22895',
      To: 'lady.anna.lannister@gmail.com',
      From: 'lady.anna.lannister@gmail.com',
      Subject: 'New volunteer contact',
      Body: `<html><h2>Contact</h2><p>Name: <strong>${formData.name.value}</strong></p><p>E-mail: <strong>${formData.email.value}</strong></p><p>Message: <em>${formData.message.value}</em></p></html>`
    }).then(message => {
      if (message === 'OK') {
        toggleEmailSent(true);
      } else {
        console.warn('Failed sending message though server', message);
      }
    });
  };

  const updateForm = (value, field) => {
    const updatedData = { ...formData };
    updatedData[field] = {
      value,
      isValid: validateForm(field, value)
    };
    setFormData(updatedData);
  };

  useEffect(() => {
    texts = JTTF_TEXTS[language];
  }, [language]);

  return (
    <>
      {emailSent ? (
        <Container>
          <Title colors={colors}>{texts.messageSent.title}</Title>
          <Description>
            <TextEmail colors={colors}>{texts.messageSent.msgSent}</TextEmail>
          </Description>
        </Container>
      ) : (
        <Section colors={colors}>
          <SectionHeader
            colors={colors}
            img={VolunteersInAction}
            position="0 20%"
            socialLinks={socialLinks}
            title={texts.title}
          />
          <Content>
            <Text>{texts.text1}</Text>
            <Text>{texts.text2}</Text>
            <Text>{texts.text3}</Text>
            <MoreInfo>
              {texts.infoIcons.map(item => (
                <Info colors={colors} key={item.icon}>
                  <Icon
                    className={item.icon}
                    colors={colors}
                    item={item.title}
                  />
                  <InfoTitle>{item.title}</InfoTitle>
                  <InfoDescription colors={colors}>
                    {item.description}
                  </InfoDescription>
                </Info>
              ))}
            </MoreInfo>
            <FormArea
              colors={colors}
              // action="mailto:you@yourdmainhere.com"
              // method="post"
              enctype="text/plain"
            >
              <Field>
                <Label for="name">{texts.form.fullName}</Label>
                <TextField
                  onKeyUp={event => updateForm(event.target.value, 'name')}
                  id="name"
                  name="name"
                  type="text"
                />
              </Field>
              <Field>
                <Label for="email">{texts.form.email}</Label>
                <TextField
                  onKeyUp={event => updateForm(event.target.value, 'email')}
                  id="email"
                  name="email"
                  type="email"
                />
              </Field>
              <Field>
                <Label for="message">{texts.form.message}</Label>
                <MessageField
                  onKeyUp={event => updateForm(event.target.value, 'message')}
                  id="message"
                  name="message"
                  rows="4"
                />
              </Field>
              <SendButton
                // type="submit"
                // name="submit"
                // value="Submit"
                colors={colors}
                onClick={sendEmail}
                // disabled={!allValidated(formData)}
              >
                {texts.form.send}
              </SendButton>
            </FormArea>
          </Content>
        </Section>
      )}
    </>
  );
};

JumpToTheFieldSection.propTypes = {
  state: StatePropType.isRequired
};

export default connect(JumpToTheFieldSection);
