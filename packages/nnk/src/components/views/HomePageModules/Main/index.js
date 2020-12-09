import { connect } from 'frontity';
import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Home } from '../../../../assets/images';
import { HOMEPAGE_TEXTS } from '../../../../db';
import { StatePropType } from '../../../../types';
import { getSocialLinks } from '../../../../utils';
import SocialModule from '../../SocialContainer';
import { MainText, PhotoContainer } from './styles';

const socialLinks = getSocialLinks([
  'Facebook',
  'Twitter',
  'Instagram',
  'Youtube',
  'Email'
]);

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
