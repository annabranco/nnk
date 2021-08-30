// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import config from '../../../setup/config';
import { getDevice, getSocialLinks, toggleBodyScroll } from '../../../utils';
import { DONATION_TEXTS } from '../../../db';
import SectionHeader from '../SectionHeader';
import DonorBox from '../DonorBox';
import AppModal from '../../core/AppModal';
import BankDetails from '../BankDetails';
import {
  DonorBoxLogo,
  FiguresReport,
  HelpUsTrails,
  HeroHelpSmall,
  HeroHelpMedium,
  Triodos,
  PayPal,
  Value0,
  Value1,
  Value2
} from '../../../assets/images';
import { DESKTOP } from '../../../constants/devices';
import { LARGE } from '../../../constants/sizes';
import { BANK, REPORT, YOUTUBE_VIDEO } from '../../../constants/modals';
import { StatePropType } from '../../../types';
import { SeparatorBar } from '../HomePageModules/styles';
import { Mail } from '../PrivacyDeclaration/styles';
import { VideoElement } from '../HomePageModules/Main/styles';
import {
  Content,
  Info,
  Intro,
  Logo,
  PartnersLogos,
  Section,
  SubsectionWrapper,
  ValueDescription,
  ValueItem,
  ValueTitle,
  ValueVideo,
  Values,
  Video,
  TextSmall,
  HelpUsButton,
  ReportImage,
  Title,
  ThankYouText,
  HelpUsImage
} from './styles';

const getVideoThumb = index => {
  switch (index) {
    case 0:
      return Value0;
    case 1:
      return Value1;
    case 2:
      return Value2;
    default:
      return null;
  }
};

const HelpUs = ({ state }) => {
  const [displayModal, toggleDisplayModal] = useState(false);
  const { colors, language } = state.theme;
  let texts = DONATION_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  const toggleModal = modal => {
    if (displayModal) {
      toggleDisplayModal(false);
      toggleBodyScroll();
    } else {
      toggleDisplayModal(modal);
      toggleBodyScroll('hide');
    }
  };

  // const renderCampaigns = side =>
  //   config.campaigns.activeCampaigns
  //     .filter(
  //       campgn =>
  //         campgn !== config.campaigns.mainCampaing &&
  //         config.campaigns.details[campgn].side === side
  //     )
  //     .sort(
  //       (a, b) =>
  //         config.campaigns.details[a].order - config.campaigns.details[b].order
  //     )
  //     .map(campgn => (
  //       <a
  //         href={config.campaigns.details[campgn].url}
  //         key={campgn}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <CampaignPhoto
  //           alt={config.campaigns.details[campgn].name}
  //           src={CAMPAIGN_PHOTOS[campgn]}
  //           id={campgn}
  //         />
  //       </a>
  //     ));

  useEffect(() => {
    texts = DONATION_TEXTS[language];
  }, [language]);

  return (
    <Section colors={colors}>
      <SectionHeader
        colors={colors}
        imgs={[HeroHelpSmall, HeroHelpMedium, HeroHelpMedium]}
        position="100% 30%"
        socialLinks={socialLinks}
        title={texts.title}
      />

      <Content>
        <SubsectionWrapper>
          <DonorBox campaign={config.campaigns.mainCampaing} colors={colors} />
        </SubsectionWrapper>
        <SubsectionWrapper>
          <Title colors={colors}>{texts.support}</Title>
          <SeparatorBar colors={colors} size="small" />
          <Intro>{texts.description}</Intro>
          <ThankYouText>{texts.thankU}</ThankYouText>
          <HelpUsImage img={HelpUsTrails} />
        </SubsectionWrapper>
      </Content>
      <HelpUsButton colors={colors} onClick={() => toggleModal(REPORT)}>
        {texts.clickToDonate}
      </HelpUsButton>

      <SeparatorBar colors={colors} size={LARGE} />

      <Info>
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
        <HelpUsButton colors={colors} onClick={() => toggleModal(REPORT)}>
          {texts.downloadReport}
        </HelpUsButton>
        <PartnersLogos>
          <Logo alt="Triodos" onClick={() => toggleModal(BANK)} src={Triodos} />
          <Logo
            onClick={() => toggleModal(BANK)}
            src={DonorBoxLogo}
            alt="DonorBox"
          />
          <Logo onClick={() => toggleModal(BANK)} src={PayPal} alt="Paypal" />
        </PartnersLogos>
        <TextSmall>
          {texts.certificate}{' '}
          <Mail href="mailto:partners@nonamekitchen.com">
            partners@nonamekitchen.com
          </Mail>
        </TextSmall>
      </Info>
      {displayModal === BANK && (
        <AppModal
          closeAction={() => toggleModal(false)}
          closeButton={getDevice() !== DESKTOP}
        >
          <BankDetails colors={colors} language={language} />
        </AppModal>
      )}
      {displayModal === REPORT && (
        <AppModal closeAction={() => toggleModal(false)}>
          <ReportImage src={FiguresReport} />
        </AppModal>
      )}
      {displayModal && displayModal !== BANK && displayModal !== REPORT && (
        <AppModal closeAction={() => toggleModal(false)} closeButton>
          <VideoElement
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={displayModal}
            title={YOUTUBE_VIDEO}
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
