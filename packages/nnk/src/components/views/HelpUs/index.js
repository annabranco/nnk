import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import SectionHeader from '../SectionHeader';
import config from '../../../setup/config';
import { getSocialLinks, validateForm } from '../../../utils';
import { DONATION_TEXTS } from '../../../db';
import {
  Photo09,
  PayPal,
  GoFundMe,
  Teaming,
  CrossedFork
} from '../../../assets/images';
import {
  Content,
  SectionFooter,
  FooterText,
  FooterSeparator,
  Section,
  SubsectionWrapper,
  Values,
  ValueTitle,
  ValueDescription,
  PartnersLogos,
  Logo,
  TransferInfo,
  Instructions,
  ItemTitle,
  ItemDescription,
  DonorBox,
  Subscription,
  ValueItem,
  SubscriptionTitle,
  FormArea,
  Field,
  Label,
  TextField,
  SendButton,
  SubscriptionTitleHighlight
} from './styles';
import { StatePropType } from '../../../types';
import SocialModule from '../SocialContainer';

const HelpUs = ({ state }) => {
  const { colors, language } = state.theme;
  let texts = DONATION_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  const INITIAL_FORM_DATA = {
    name: {
      value: null,
      isValid: false
    },
    email: {
      value: null,
      isValid: false
    }
  };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const updateForm = (value, field) => {
    const updatedData = { ...formData };
    updatedData[field] = {
      value,
      isValid: validateForm(field, value)
    };
    setFormData(updatedData);
  };

  const sendEmail = event => {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    // Email.send({
    //   SecureToken: 'a8424171-6a2c-42f8-a17e-24ff3da22895',
    //   To: 'lady.anna.lannister@gmail.com',
    //   From: 'lady.anna.lannister@gmail.com',
    //   Subject: 'New volunteer contact',
    //   Body: `<html><h2>Contact</h2><p>Name: <strong>${formData.name.value}</strong></p><p>E-mail: <strong>${formData.email.value}</strong></p><p>Message: <em>${formData.message.value}</em></p></html>`
    // }).then(message => {
    //   if (message === 'OK') {
    //     toggleEmailSent(true);
    //   } else {
    //     console.warn('Failed sending message through server', message);
    //   }
    // });
  };

  useEffect(() => {
    texts = DONATION_TEXTS[language];
  }, [language]);

  const updtateWildcardsInfo = text => {
    switch (true) {
      case text.includes('$[mail]'):
        return text.replace('$[mail]', config.partnersEmail);
      default:
        return text;
    }
  };

  return (
    <Section colors={colors}>
      <SectionHeader
        colors={colors}
        img={Photo09}
        position="100% 30%"
        socialLinks={socialLinks}
        title={texts.title}
      />
      <Content>
        <SubsectionWrapper>
          <Values colors={colors}>
            {texts.values.map(value => (
              <ValueItem key={value.title}>
                <ValueDescription>
                  <ValueTitle>{value.title}</ValueTitle>
                  {updtateWildcardsInfo(value.description)}
                </ValueDescription>
              </ValueItem>
            ))}
          </Values>
          <PartnersLogos>
            <Logo src={PayPal} />
            <Logo src={GoFundMe} />
            <Logo src={Teaming} />
          </PartnersLogos>
          <TransferInfo colors={colors}>
            <Instructions>{texts.transfer}</Instructions>
            <ItemTitle>
              {texts.accountName}
              <ItemDescription>{config.account.name}</ItemDescription>
            </ItemTitle>
            <ItemTitle>
              {texts.address}
              <ItemDescription>{config.account.address}</ItemDescription>
            </ItemTitle>
            <ItemTitle>
              {texts.iban}
              <ItemDescription>{config.account.iban}</ItemDescription>
            </ItemTitle>
            <ItemTitle>
              {texts.swift}
              <ItemDescription>{config.account.swift}</ItemDescription>
            </ItemTitle>
          </TransferInfo>
        </SubsectionWrapper>
        <SubsectionWrapper>
          <DonorBox>DonorBox</DonorBox>
          <Subscription>
            <SocialModule size="small" socialLinks={socialLinks} />
            <SubscriptionTitle colors={colors}>
              {texts.subscribeTo}
            </SubscriptionTitle>
            <SubscriptionTitleHighlight colors={colors}>
              {texts.noNameNews}
            </SubscriptionTitleHighlight>
            <FormArea
              colors={colors}
              // action="mailto:you@yourdmainhere.com"
              // method="post"
              enctype="text/plain"
            >
              <Field>
                <Label hidden htmlFor="name">
                  {texts.form.name}
                </Label>
                <TextField
                  onKeyUp={event => updateForm(event.target.value, 'name')}
                  id="name"
                  name="name"
                  placeholder={texts.form.name}
                  type="text"
                />
              </Field>
              <Field>
                <Label hidden htmlFor="email">
                  {texts.form.email}
                </Label>
                <TextField
                  onKeyUp={event => updateForm(event.target.value, 'email')}
                  id="email"
                  name="email"
                  placeholder={texts.form.email}
                  type="email"
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
          </Subscription>
        </SubsectionWrapper>
      </Content>
      <SectionFooter colors={colors}>
        <FooterText>{texts.justice}</FooterText>
        <FooterSeparator src={CrossedFork} />
        <FooterText>{texts.hope}</FooterText>
        <FooterSeparator src={CrossedFork} />
        <FooterText>{texts.dignity}</FooterText>
      </SectionFooter>
    </Section>
  );
};

HelpUs.propTypes = {
  state: StatePropType.isRequired
};

export default connect(HelpUs);
