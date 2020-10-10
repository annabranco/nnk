import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { styled, css } from 'frontity';
import Background from '../../../assets/images/bgs/nnkHOME2.jpg';
import PageSection from '../MainPageSections';
import BasicSection from '../MainPageSections/Basic';
import VolunteerSection from '../MainPageSections/Volunteer';
import SocialLink from '../SocialLink';

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

const MainContainer = styled.div`
  background: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const PhotoContainer = styled.div`
  position: relative;
  width: calc(100% - 100px);
  box-sizing: border-box;
  height: calc(100vh - 100px);
  ${({ img }) => css`
    background-image: ${`url(${img})`};
    background-repeat: no-repeat;
    ${'' /* background-attachment: fixed; */}
    background-size: 95%;
    background-position: center 30%;
  `}
`;

const SocialContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 40px;
`;

// const MainPhoto = styled.img`
//   margin-bottom: 50px;
// `;
