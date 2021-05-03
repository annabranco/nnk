// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect } from 'react';
import { connect } from 'frontity';
import config from '../../../setup/config';
import { getSocialLinks } from '../../../utils';
import { DONATION_TEXTS } from '../../../db';
import SectionHeader from '../SectionHeader';
import { Photo09 } from '../../../assets/images';
import { StatePropType } from '../../../types';
import {
  Content,
  Instructions,
  ItemDescription,
  ItemTitle,
  Section,
  SubsectionWrapper,
  TransferInfo,
  ValueDescription,
  ValueItem,
  ValueTitle,
  Values
} from './styles';
import ExternalForm from '../ExternalFrame';

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
          <ExternalForm
            colors={colors}
            width={340}
            height={800}
            src={config.subscriptionEndpoint}
            title="subscription"
          />
          {/* <DonorBox>DonorBox</DonorBox> */}
        </SubsectionWrapper>
      </Content>
    </Section>
  );
};

HelpUs.propTypes = {
  state: StatePropType.isRequired
};

export default connect(HelpUs);
