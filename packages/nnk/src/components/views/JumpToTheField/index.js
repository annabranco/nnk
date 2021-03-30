// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import SectionHeader from '../SectionHeader';
import {
  // validateForm,
  getSocialLinks,
  getMediaQuery
  // allValidated
} from '../../../utils';
import { JTTF_TEXTS } from '../../../db';
import { MOBILE, TABLET } from '../../../constants/devices';
import { VolunteersInAction } from '../../../assets/images';
import { StatePropType } from '../../../types';
import {
  // Container,
  Content,
  // Description,
  // Field,
  // FormArea,
  Icon,
  Info,
  InfoDescription,
  InfoTitle,
  JoinButton,
  // Label,
  // MessageField,
  MoreInfo,
  JTTFSection,
  // SendButton,
  Text
  // TextEmail,
  // TextField,
  // Title
} from './styles';
import AppModal from '../../core/AppModal';

// const INITIAL_FORM_DATA = {
//   email: {
//     isValid: false,
//     value: null
//   },
//   message: {
//     isValid: false,
//     value: null
//   },
//   name: {
//     isValid: false,
//     value: null
//   }
// };

const DEVICE_VERSION = getMediaQuery() === MOBILE || getMediaQuery() === TABLET;

const JumpToTheFieldSection = ({ state }) => {
  const [displayModal, toggleModal] = useState(false);
  // const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  // const [emailSent, toggleEmailSent] = useState(false);

  const { colors, language } = state.theme;
  let texts = JTTF_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  // const sendEmail = event => {
  //   event.preventDefault();
  //   // eslint-disable-next-line no-undef
  //   Email.send({
  //     SecureToken: '5ee1f4fa-251a-4319-8cd5-71bb061b263a',
  //     To: 'nnk56478991032@outlook.com',
  //     From: 'nnk56478991032@outlook.com',
  //     Subject: 'New volunteer contact',
  //     Body: `<html><h2>Contact</h2><p>Name: <strong>${formData.name.value}</strong></p><p>E-mail: <strong>${formData.email.value}</strong></p><p>Message: <em>${formData.message.value}</em></p></html>`
  //   }).then(message => {
  //     if (message === 'OK') {
  //       toggleEmailSent(true);
  //     } else {
  //       console.warn('Failed sending message though server', message);
  //     }
  //   });
  // };

  // const updateForm = (value, field) => {
  //   const updatedData = { ...formData };
  //   updatedData[field] = {
  //     value,
  //     isValid: validateForm(field, value)
  //   };
  //   setFormData(updatedData);
  // };

  useEffect(() => {
    texts = JTTF_TEXTS[language];
  }, [language]);

  return (
    <>
      {/* {emailSent ? (
        <Container>
          <Title colors={colors}>{texts.messageSent.title}</Title>
          <Description>
            <TextEmail colors={colors}>{texts.messageSent.msgSent}</TextEmail>
          </Description>
        </Container>
      ) : ( */}
      <JTTFSection colors={colors}>
        <SectionHeader
          colors={colors}
          img={VolunteersInAction}
          position="50% 20%"
          socialLinks={socialLinks}
          title={DEVICE_VERSION ? texts.titleAlt : texts.title}
        />
        <Content>
          <Text>{texts.text1}</Text>
          {texts.text2 && <Text>{texts.text2}</Text>}
          {texts.text3 && <Text>{texts.text3}</Text>}
          <MoreInfo>
            {texts.infoIcons.map(item => (
              <Info colors={colors} key={item.icon}>
                <Icon className={item.icon} colors={colors} item={item.title} />
                <InfoTitle>{item.title}</InfoTitle>
                <InfoDescription colors={colors}>
                  {item.description}
                </InfoDescription>
                <InfoDescription colors={colors} subItem>
                  {item.description2}
                </InfoDescription>
              </Info>
            ))}
          </MoreInfo>
          <JoinButton onClick={toggleModal}>{texts.form.joinUs}</JoinButton>
          {displayModal && (
            <AppModal closeAction={() => toggleModal(false)}>
              <iframe
                title="Volunteer Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSe4TmEylSelfV1GJQLBURdP2Swp0mYTWAVZuehZzK6bgffbXg/viewform?embedded=true"
                width="640"
                height="2930"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </AppModal>
          )}
          {/* <FormArea colors={colors} enctype="text/plain">
              <Field>
                <Label htmlFor="name">{texts.form.fullName}</Label>
                <TextField
                  onKeyUp={event => updateForm(event.target.value, 'name')}
                  id="name"
                  name="name"
                  type="text"
                />
              </Field>
              <Field>
                <Label htmlFor="email">{texts.form.email}</Label>
                <TextField
                  onKeyUp={event => updateForm(event.target.value, 'email')}
                  id="email"
                  name="email"
                  type="email"
                />
              </Field>
              <Field>
                <Label htmlFor="message">{texts.form.message}</Label>
                <MessageField
                  onKeyUp={event => updateForm(event.target.value, 'message')}
                  id="message"
                  name="message"
                  rows="4"
                />
              </Field>
              <SendButton
                colors={colors}
                onClick={sendEmail}
                disabled={!allValidated(formData)}
              >
                {texts.form.send}
              </SendButton>
            </FormArea>
      )} */}
        </Content>
      </JTTFSection>
    </>
  );
};

JumpToTheFieldSection.propTypes = {
  state: StatePropType.isRequired
};

export default connect(JumpToTheFieldSection);
