import { connect } from 'frontity';
import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { getMediaQuery } from '../../../utils';
import { HOMEPAGE_TEXTS, WHY_TEXTS, VOLUNTEER_TEXTS } from '../../../db';
import { MOBILE } from '../../../constants/devices';
import BasicModule from '../../views/HomePageModules/Basic';
import MainModule from '../../views/HomePageModules/Main';
import PageSection from '../../views/HomePageModules';
import VolunteerModule from '../../views/HomePageModules/Volunteer';
import { StatePropType } from '../../../types';
import { MainContainer } from './styles';
import SubscriptionArea from '../../views/Subscribe';

const MainPage = ({ state }) => {
  const { colors, language } = state.theme;
  let homepageTexts = HOMEPAGE_TEXTS[language];
  let whyTexts = WHY_TEXTS[language];
  let volunteerText = VOLUNTEER_TEXTS[language];

  useEffect(() => {
    homepageTexts = HOMEPAGE_TEXTS[language];
    whyTexts = WHY_TEXTS[language];
    volunteerText = VOLUNTEER_TEXTS[language];
  }, [language]);

  return (
    <MainContainer colors={colors}>
      <MainModule />
      <PageSection
        size={getMediaQuery() === MOBILE ? 'full' : 'large'}
        colors={colors}
      >
        <BasicModule
          texts={homepageTexts}
          whyTexts={whyTexts}
          colors={colors}
        />
      </PageSection>
      <PageSection size="large" colors={colors}>
        <VolunteerModule texts={volunteerText} colors={colors} />
      </PageSection>
      <SubscriptionArea colors={colors} />
    </MainContainer>
  );
};

MainPage.propTypes = {
  state: StatePropType.isRequired
};

export default connect(MainPage);
