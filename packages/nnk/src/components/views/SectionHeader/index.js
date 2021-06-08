/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { arrayOf, string } from 'prop-types';
import { getDevice } from '../../../utils';
import { DESKTOP } from '../../../constants/devices';
import SocialModule from '../SocialContainer';
import { ColorsPropType, ConfigSocialLinksPropType } from '../../../types';
import { PhotoContainer } from '../HomePageModules/Main/styles';
import { Title, TitleWrapper } from './styles';

const IS_DESKTOP = getDevice() === DESKTOP;

const SectionHeader = ({ colors, img, imgs, position, socialLinks, title }) => (
  <PhotoContainer
    colors={colors}
    img={img}
    imgs={imgs}
    position={position}
    section
  >
    {IS_DESKTOP && <SocialModule socialLinks={socialLinks} />}

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
