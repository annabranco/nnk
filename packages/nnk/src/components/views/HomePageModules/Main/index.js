import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import Background from '../../../../assets/images/bgs/homeBg.jpg';
import SocialModule from '../../SocialContainer';
import config from '../../../../setup/config';
import { PhotoContainer } from './styles';

const { socialLinks } = config;

const MainModule = () => (
  <PhotoContainer img={Background}>
    <SocialModule socialLinks={socialLinks} />
  </PhotoContainer>
);

export default MainModule;
