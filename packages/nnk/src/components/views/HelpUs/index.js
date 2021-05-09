// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import config from '../../../setup/config';
import { getDevice, getSocialLinks } from '../../../utils';
import { DONATION_TEXTS } from '../../../db';
import SectionHeader from '../SectionHeader';
import DonorBox from '../DonorBox';
import AppModal from '../../core/AppModal';
import {
  CAMPAIGN_PHOTOS,
  Photo09,
  Triodos,
  PayPal,
  Value0,
  Value2
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
  ValueVideo,
  Video
} from './styles';
import { Mail } from '../PrivacyDeclaration/styles';
import BankDetails from '../BankDetails';
import { VideoElement } from '../HomePageModules/Main/styles';
import { DESKTOP } from '../../../constants/devices';

const getVideoThumb = index => {
  switch (index) {
    case 0:
      return Value0;
    case 2:
      return Value2;
    default:
      return null;
  }
};

const HelpUs = ({ state }) => {
  // const [selectedCampaign, changeSelectedCampaign] = useState(
  //   config.campaigns.mainCampaing
  // );
  const [displayModal, toggleModal] = useState(false);
  const { colors, language } = state.theme;
  let texts = DONATION_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  // const onClickCampaign = ({ currentTarget: { id } }) =>
  //   changeSelectedCampaign(id);

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
          <DonorBox campaign={config.campaigns.mainCampaing} colors={colors} />
        </SubsectionWrapper>
        <SubsectionWrapper>
          <Title colors={colors}>{texts.ongoing}</Title>
          {config.campaigns.activeCampaigns
            .filter(campgn => campgn !== config.campaigns.mainCampaing)
            .sort(
              (a, b) =>
                config.campaigns.details[a].order -
                config.campaigns.details[b].order
            )
            .map(campgn => (
              <a
                href={config.campaigns.details[campgn].url}
                key={campgn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CampaignPhoto
                  alt={config.campaigns.details[campgn].name}
                  src={CAMPAIGN_PHOTOS[campgn]}
                  id={campgn}
                />
              </a>
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
              <Video>
                <ValueVideo
                  onClick={() => toggleModal(value.video)}
                  src={getVideoThumb(index)}
                />
              </Video>
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
          <Logo
            onClick={() => toggleModal('bank')}
            src={Triodos}
            alt="Triodos"
          />
          <Logo onClick={() => toggleModal('bank')} src={PayPal} alt="Paypal" />
        </PartnersLogos>
      </Info>
      {displayModal === 'bank' && (
        <AppModal
          closeAction={() => toggleModal(false)}
          closeButton={getDevice() !== DESKTOP}
        >
          <BankDetails colors={colors} language={language} />
        </AppModal>
      )}
      {displayModal && displayModal !== 'bank' && (
        <AppModal closeAction={() => toggleModal(false)}>
          <VideoElement
            src={displayModal}
            title="Youtube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AppModal>
      )}
    </Section>
  );
};

HelpUs.propTypes = {
  state: StatePropType
};

HelpUs.defaultProps = {
  state: null
};

export default connect(HelpUs);
