import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { HomeBG } from '../../../../assets/images';
import SocialModule from '../../SocialContainer';
import config from '../../../../setup/config';
import { PhotoContainer } from './styles';

const { socialLinks } = config;

const MainModule = () => (
  <PhotoContainer img={HomeBG}>
    <SocialModule socialLinks={socialLinks} />
  </PhotoContainer>
);

export default MainModule;
