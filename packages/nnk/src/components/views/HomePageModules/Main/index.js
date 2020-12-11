import { connect } from 'frontity';
import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { getMediaQuery, getSocialLinks } from '../../../../utils';
import { DESKTOP } from '../../../../constants/devices';
import { HOMEPAGE_TEXTS } from '../../../../db';
import SocialModule from '../../SocialContainer';
import { Home } from '../../../../assets/images';
import { StatePropType } from '../../../../types';
import { MainText, PhotoContainer } from './styles';

const socialLinks =
  getMediaQuery() === DESKTOP
    ? getSocialLinks(['Facebook', 'Twitter', 'Instagram', 'Youtube', 'Email'])
    : getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

const MainModule = ({ state }) => {
  const { colors, language } = state.theme;
  let homepageTexts = HOMEPAGE_TEXTS[language];

  useEffect(() => {
    homepageTexts = HOMEPAGE_TEXTS[language];
  }, [language]);

  return (
    <PhotoContainer img={Home}>
      <MainText colors={colors}>{homepageTexts.mainText}</MainText>
      <SocialModule socialLinks={socialLinks} />
    </PhotoContainer>
  );
};

MainModule.propTypes = {
  state: StatePropType.isRequired
};

export default connect(MainModule);
