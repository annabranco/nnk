import { connect } from 'frontity';
import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { any } from 'prop-types';
import PageSection from '../../views/HomePageModules';
import BasicModule from '../../views/HomePageModules/Basic';
import MainModule from '../../views/HomePageModules/Main';
import VolunteerModule from '../../views/HomePageModules/Volunteer';
import HOMEPAGE_TEXTS from '../../../db/homepage.json';
import WHY_TEXTS from '../../../db/why.json';

import { MainContainer } from './styles';

const MainPage = ({ state }) => {
  const { colors, language } = state.theme;
  let homepageTexts = HOMEPAGE_TEXTS[language];
  let whyTexts = WHY_TEXTS[language];

  useEffect(() => {
    homepageTexts = HOMEPAGE_TEXTS[language];
    whyTexts = WHY_TEXTS[language];
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
      <PageSection size="large">
        <VolunteerModule />
      </PageSection>
    </MainContainer>
  );
};

MainPage.propTypes = {
  state: any.isRequired
};

export default connect(MainPage);
