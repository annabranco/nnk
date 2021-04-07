import { connect } from 'frontity';
import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { getMediaQuery } from '../../../utils';
import {
  HOMEPAGE_TEXTS,
  WHY_TEXTS,
  VOLUNTEER_TEXTS,
  DONATION_TEXTS
} from '../../../db';
import { MOBILE } from '../../../constants/devices';
import BasicModule from '../../views/HomePageModules/Basic';
import MainModule from '../../views/HomePageModules/Main';
import PageSection from '../../views/HomePageModules';
import VolunteerModule from '../../views/HomePageModules/Volunteer';
import { StatePropType } from '../../../types';
import { MainContainer, SubscriptionButton } from './styles';
import SubscriptionArea from '../../views/Subscribe';
import AppModal from '../../core/AppModal';

const MainPage = ({ state }) => {
  const [displayModal, toggleModal] = useState(false);
  const { colors, language } = state.theme;
  let homepageTexts = HOMEPAGE_TEXTS[language];
  let whyTexts = WHY_TEXTS[language];
  let volunteerTexts = VOLUNTEER_TEXTS[language];
  let donationTexts = DONATION_TEXTS[language];

  useEffect(() => {
    homepageTexts = HOMEPAGE_TEXTS[language];
    whyTexts = WHY_TEXTS[language];
    volunteerTexts = VOLUNTEER_TEXTS[language];
    donationTexts = DONATION_TEXTS[language];
  }, [language]);

  return (
    <MainContainer colors={colors}>
      <MainModule />
      <PageSection
        colors={colors}
        noBorder
        size={getMediaQuery() === MOBILE ? 'full' : 'large'}
      >
        <BasicModule
          texts={homepageTexts}
          whyTexts={whyTexts}
          colors={colors}
        />
      </PageSection>
      <PageSection size="large" colors={colors}>
        <VolunteerModule texts={volunteerTexts} colors={colors} />
      </PageSection>
      <SubscriptionButton colors={colors} onClick={toggleModal}>
        {donationTexts.subscribeTo} {donationTexts.noNameNews}
      </SubscriptionButton>
      {displayModal && (
        <AppModal closeAction={() => toggleModal(false)}>
          <SubscriptionArea
            colors={colors}
            size={getMediaQuery() === MOBILE ? 'small' : 'large'}
          />
        </AppModal>
      )}
    </MainContainer>
  );
};

MainPage.propTypes = {
  state: StatePropType.isRequired
};

export default connect(MainPage);
