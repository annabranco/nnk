import React from 'react';
import { arrayOf, string } from 'prop-types';
import SocialModule from '../SocialContainer';
import { PhotoContainer } from '../HomePageModules/Main/styles';
import { Title, TitleWrapper } from './styles';
import { ColorsPropType, ConfigSocialLinksPropType } from '../../../types';
import { getMediaQuery } from '../../../utils';
import { DESKTOP } from '../../../constants/devices';

const IS_DESKTOP = getMediaQuery() === DESKTOP;

const SectionHeader = ({ colors, img, socialLinks, position, title }) => (
  <PhotoContainer img={img} position={position} section>
    {IS_DESKTOP && <SocialModule socialLinks={socialLinks} />}

    <TitleWrapper colors={colors}>
      <Title>{title}</Title>
    </TitleWrapper>
  </PhotoContainer>
);

SectionHeader.propTypes = {
  colors: ColorsPropType.isRequired,
  img: string.isRequired,
  position: string,
  socialLinks: arrayOf(ConfigSocialLinksPropType).isRequired,
  title: string.isRequired
};

SectionHeader.defaultProps = {
  position: 'center 15%'
};

export default SectionHeader;
