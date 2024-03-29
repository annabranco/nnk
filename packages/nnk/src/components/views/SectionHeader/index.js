/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { arrayOf, string } from 'prop-types';
import SocialModule from '../SocialContainer';
import { ColorsPropType, ConfigSocialLinksPropType } from '../../../types';
import { PhotoContainer } from '../HomePageModules/Main/styles';
import { Title, TitleWrapper } from './styles';

const SectionHeader = ({ colors, img, imgs, position, socialLinks, title }) => (
  <PhotoContainer
    colors={colors}
    img={img}
    imgs={imgs}
    position={position}
    section
  >
    <SocialModule inHeader socialLinks={socialLinks} />

    <TitleWrapper colors={colors}>
      <Title>{title}</Title>
    </TitleWrapper>
  </PhotoContainer>
);

SectionHeader.propTypes = {
  colors: ColorsPropType.isRequired,
  img: string,
  imgs: arrayOf(string),
  position: string,
  socialLinks: arrayOf(ConfigSocialLinksPropType).isRequired,
  title: string.isRequired
};

SectionHeader.defaultProps = {
  img: null,
  imgs: null,
  position: 'center 15%'
};

export default SectionHeader;
