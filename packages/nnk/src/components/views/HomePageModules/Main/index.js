import { connect } from 'frontity';
import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import {
  getDevice,
  getImageSize,
  getSocialLinks,
  toggleBodyScroll
} from '../../../../utils';
import { DESKTOP } from '../../../../constants/devices';
import { HOMEPAGE_TEXTS } from '../../../../db';
import SocialModule from '../../SocialContainer';
import { HomeBig, HomeMedium, HomeSmall } from '../../../../assets/images';
import { StatePropType } from '../../../../types';
import {
  MainText,
  MainTextWrapper,
  PhotoContainer,
  VideoButton,
  VideoElement
} from './styles';
import AppModal from '../../../core/AppModal';

const socialLinks =
  getDevice() === DESKTOP
    ? getSocialLinks(['Facebook', 'Twitter', 'Instagram', 'Youtube', 'Email'])
    : getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

const MainModule = ({ state }) => {
  const { colors, language } = state.theme;
  const [isVideoDisplayed, displayVideo] = useState(false);

  let homepageTexts = HOMEPAGE_TEXTS[language];

  const onToggleVideo = () => {
    if (isVideoDisplayed) {
      displayVideo(false);
      toggleBodyScroll();
    } else {
      displayVideo(true);
      toggleBodyScroll('hide');
    }
  };

  useEffect(() => {
    homepageTexts = HOMEPAGE_TEXTS[language];
  }, [language]);

  useEffect(() => {
    return () => toggleBodyScroll();
  }, []);

  return (
    <PhotoContainer colors={colors} imgs={[HomeSmall, HomeMedium, HomeBig]}>
      <MainTextWrapper>
        <MainText colors={colors}>{homepageTexts.mainText}</MainText>
        <VideoButton colors={colors} onClick={onToggleVideo}>
          {homepageTexts.videoButton}
          <i aria-hidden className="far fa-play-circle" />
        </VideoButton>
      </MainTextWrapper>
      <SocialModule socialLinks={socialLinks} />
      {isVideoDisplayed && (
        <AppModal closeAction={onToggleVideo}>
          <VideoElement
            src="https://www.youtube.com/embed/yfMWd8rLSEs?controls=0&autoplay=1"
            title="Wanna Join? youtube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AppModal>
      )}
    </PhotoContainer>
  );
};

MainModule.propTypes = {
  state: StatePropType
};

MainModule.defaultProps = {
  state: null
};

export default connect(MainModule);
