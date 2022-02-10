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
  FiguresReportSpanish,
  HelpUsTrailsMedium,
  HelpUsTrailsSmall,
  HeroHelpMedium,
  HeroHelpSmall,
  PayPal,
  Triodos,
  Value0,
  Value1,
  Value2
} from '../../../assets/images';
import { MOBILE, TABLET } from '../../../constants/devices';
import { LARGE } from '../../../constants/sizes';
import { BANK, REPORT, YOUTUBE_VIDEO } from '../../../constants/modals';
import { StatePropType } from '../../../types';
import { SeparatorBar } from '../HomePageModules/styles';
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

  const formatButtonText = text => {
    const updatedText = text
      .replace('IBAN: ES19 1491 0001 2830 0013 6961', '<span>IBAN: ES19 1491 0001 2830 0013 6961</span>')
    return updatedText;
  };

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
          <HelpUsImage imgs={[HelpUsTrailsSmall, HelpUsTrailsMedium]} />
        </SubsectionWrapper>
      </Content>
      <HelpUsButton colors={colors}  dangerouslySetInnerHTML={{ __html: formatButtonText(texts.clickToDonate) }} onClick={() => toggleModal(BANK)} />

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
          <a
            href="https://donorbox.org/no-name-kitchen"
            rel="noreferrer"
            target="_blank"
          >
            <Logo src={DonorBoxLogo} alt="DonorBox" />
          </a>
          <Logo onClick={() => toggleModal(BANK)} src={PayPal} alt="Paypal" />
        </PartnersLogos>
      </Info>
      {displayModal === BANK && (
        <AppModal
          closeAction={() => toggleModal(false)}
          closeButton={getDevice() === MOBILE}
        >
          <BankDetails colors={colors} language={language} />
        </AppModal>
      )}
      {displayModal === REPORT && (
        <AppModal closeAction={() => toggleModal(false)}>
          <ReportImage
            src={language === 'es' ? FiguresReportSpanish : FiguresReport}
          />
        </AppModal>
      )}
      {displayModal && displayModal !== BANK && displayModal !== REPORT && (
        <AppModal
          closeAction={() => toggleModal(false)}
          closeButton={getDevice() !== TABLET}
        >
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
