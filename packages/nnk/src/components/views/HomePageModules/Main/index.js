import { connect } from 'frontity';
import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { getMediaQuery, getSocialLinks } from '../../../../utils';
import { DESKTOP } from '../../../../constants/devices';
import { HOMEPAGE_TEXTS } from '../../../../db';
import SocialModule from '../../SocialContainer';
import { Home } from '../../../../assets/images';
import { StatePropType } from '../../../../types';
import { MainText, PhotoContainer, VideoButton, VideoElement } from './styles';
import AppModal from '../../../core/AppModal';

const socialLinks =
  getMediaQuery() === DESKTOP
    ? getSocialLinks(['Facebook', 'Twitter', 'Instagram', 'Youtube', 'Email'])
    : getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

const MainModule = ({ state }) => {
  const { colors, language } = state.theme;
  const [displayVideo, toggleVideo] = useState(false);

  let homepageTexts = HOMEPAGE_TEXTS[language];

  useEffect(() => {
    homepageTexts = HOMEPAGE_TEXTS[language];
  }, [language]);

  return (
    <PhotoContainer colors={colors} img={Home}>
      <MainText colors={colors}>{homepageTexts.mainText}</MainText>
      <SocialModule socialLinks={socialLinks} />
      <VideoButton colors={colors} onClick={toggleVideo}>
        Watch video <i className="far fa-play-circle" />
      </VideoButton>
      {displayVideo && (
        <AppModal closeAction={() => toggleVideo(false)}>
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
  state: StatePropType.isRequired
};

export default connect(MainModule);
