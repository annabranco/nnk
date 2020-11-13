import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { HomeBG } from '../../../../assets/images';
import { getSocialLinks } from '../../../../utils';
import SocialModule from '../../SocialContainer';
import { PhotoContainer } from './styles';

const socialLinks = getSocialLinks([
  'Facebook',
  'Twitter',
  'Instagram',
  'Youtube',
  'Email'
]);

const MainModule = () => (
  <PhotoContainer img={HomeBG}>
    <SocialModule socialLinks={socialLinks} />
  </PhotoContainer>
);

export default MainModule;
