import { connect } from 'frontity';
import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PageSection from '../../views/HomePageModules';
import BasicModule from '../../views/HomePageModules/Basic';
import MainModule from '../../views/HomePageModules/Main';
import VolunteerModule from '../../views/HomePageModules/Volunteer';
import { HOMEPAGE_TEXTS, WHY_TEXTS, VOLUNTEER_TEXTS } from '../../../db';

import { MainContainer } from './styles';
import { StatePropType } from '../../../types';

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
      <PageSection size="large" colors={colors}>
        <BasicModule
          texts={homepageTexts}
          whyTexts={whyTexts}
          colors={colors}
        />
      </PageSection>
      <PageSection size="large" colors={colors}>
        <VolunteerModule texts={volunteerText} colors={colors} />
      </PageSection>
    </MainContainer>
  );
};

MainPage.propTypes = {
  state: StatePropType.isRequired
};

export default connect(MainPage);
