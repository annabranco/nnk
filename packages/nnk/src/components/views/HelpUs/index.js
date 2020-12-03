import React, { Fragment, useEffect } from 'react';
import { connect } from 'frontity';
import SectionHeader from '../SectionHeader';
import config from '../../../setup/config';
import { getSocialLinks } from '../../../utils';
import { DONATION_TEXTS } from '../../../db';
import { Photo09, PayPal, GoFundMe, Teaming } from '../../../assets/images';
import {
  Content,
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
  ValueItem
} from './styles';
import { StatePropType } from '../../../types';

const HelpUs = ({ state }) => {
  const { colors, language } = state.theme;
  let texts = DONATION_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

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
        position="0 30%"
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
          <Subscription>Subscribe!</Subscription>
        </SubsectionWrapper>
      </Content>
    </Section>
  );
};

HelpUs.propTypes = {
  state: StatePropType.isRequired
};

export default connect(HelpUs);
