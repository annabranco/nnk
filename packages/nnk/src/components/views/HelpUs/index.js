// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import config from '../../../setup/config';
import { getSocialLinks } from '../../../utils';
import { DONATION_TEXTS } from '../../../db';
import SectionHeader from '../SectionHeader';
import DonorBox from '../DonorBox';
import {
  CAMPAIGN_PHOTOS,
  Photo09,
  Triodos,
  PayPal
} from '../../../assets/images';
import { StatePropType } from '../../../types';
import {
  CampaignPhoto,
  Content,
  Info,
  Intro,
  Logo,
  Section,
  SubsectionWrapper,
  ValueDescription,
  ValueItem,
  ValueTitle,
  Values,
  Text,
  PartnersLogos,
  Title,
  ValueVideo
} from './styles';
import { Mail } from '../PrivacyDeclaration/styles';

const HelpUs = ({ state }) => {
  const [selectedCampaign, changeSelectedCampaign] = useState(
    config.campaigns.mainCampaing
  );
  const { colors, language } = state.theme;
  let texts = DONATION_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  const onClickCampaign = ({ currentTarget: { id } }) =>
    changeSelectedCampaign(id);

  useEffect(() => {
    texts = DONATION_TEXTS[language];
  }, [language]);

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
          <DonorBox campaign={selectedCampaign} />
        </SubsectionWrapper>
        <SubsectionWrapper>
          <Title colors={colors}>{texts.ongoing}</Title>
          {config.campaigns.activeCampaigns
            .filter(campgn => campgn !== selectedCampaign)
            .sort(
              (a, b) =>
                config.campaigns.details[a].order -
                config.campaigns.details[b].order
            )
            .map(campgn => (
              <CampaignPhoto
                alt={config.campaigns.details[campgn].name}
                key={campgn}
                onClick={onClickCampaign}
                src={CAMPAIGN_PHOTOS[campgn]}
                id={campgn}
              />
            ))}
        </SubsectionWrapper>
      </Content>
      <Info>
        <Intro>{texts.description}</Intro>
        <Values colors={colors}>
          {texts.values.map((value, index) => (
            <ValueItem key={value.title}>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
              <ValueVideo
                src={
                  CAMPAIGN_PHOTOS[config.campaigns.activeCampaigns[index + 1]]
                }
              />
            </ValueItem>
          ))}
        </Values>
        <PartnersLogos>
          <Text>
            {texts.transfer}{' '}
            <Mail href="mailto:partners@nonamekitchen.com">
              partners@nonamekitchen.com
            </Mail>
          </Text>
          <Logo src={Triodos} alt="Triodos" />
          <Logo src={PayPal} alt="Paypal" />
        </PartnersLogos>
      </Info>
    </Section>
  );
};

HelpUs.propTypes = {
  state: StatePropType.isRequired
};

export default connect(HelpUs);
