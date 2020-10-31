import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import Background from '../../../assets/images/bgs/homeBg.jpg';
import PageSection from '../MainPageSections';
import BasicSection from '../MainPageSections/Basic';
import VolunteerSection from '../MainPageSections/Volunteer';
import SocialLink from '../SocialLink';
import { MainContainer, PhotoContainer, SocialContainer } from './styles';

const MainPage = () => {
  return (
    <MainContainer>
      <PhotoContainer img={Background}>
        {/* <MainPhoto src={Background} /> */}
        <SocialContainer>
          <SocialLink
            type="Facebook"
            link="https://www.facebook.com/NoNameKitchenBelgrade"
          />
          <SocialLink
            type="Twitter"
            link="https://www.twitter.com/nonamekitchen1"
          />
          <SocialLink
            type="Instagram"
            link="https://www.instagram.com/no_name_kitchen/"
          />
        </SocialContainer>
      </PhotoContainer>
      <PageSection size="large">
        <BasicSection />
      </PageSection>
      <PageSection size="medium">
        <VolunteerSection />
      </PageSection>
    </MainContainer>
  );
};

export default MainPage;
