// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import { getDevice, getSocialLinks, toggleBodyScroll } from '../../../utils';
import { WHERE_TEXTS } from '../../../db';
import SectionHeader from '../SectionHeader';
import {
  HeroWhereMedium,
  HeroWhereSmall,
  Map,
  MapEs,
  MapEsSmall,
  MapSmall
} from '../../../assets/images';
import { StatePropType } from '../../../types';
import { Content, MapImage, ModalImage, Section } from './styles';
import AppModal from '../../core/AppModal';
import { MOBILE, TABLET } from '../../../constants/devices';

const WhereSection = ({ state }) => {
  const [displayModal, toggleModal] = useState(false);
  const { colors, language } = state.theme;
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);
  let texts = WHERE_TEXTS[language];

  const onToggleMap = () => {
    if (displayModal) {
      toggleModal(false);
      toggleBodyScroll();
    } else {
      toggleModal(true);
      toggleBodyScroll('hide');
    }
  };

  const getMapImage = () => {
    const DEVICE_VERSION = getDevice() === MOBILE || getDevice() === TABLET;

    if (language === 'es') {
      return DEVICE_VERSION ? MapEsSmall : MapEs;
    }
    return DEVICE_VERSION ? MapSmall : Map;
  };

  useEffect(() => {
    texts = WHERE_TEXTS[language];
  }, [language]);

  useEffect(() => {
    return () => toggleBodyScroll();
  }, []);

  return (
    <Section colors={colors}>
      {displayModal && (
        <AppModal closeAction={onToggleMap}>
          <ModalImage src={getMapImage()} alt={texts.mapAlt} />
        </AppModal>
      )}
      <SectionHeader
        colors={colors}
        imgs={[HeroWhereSmall, HeroWhereMedium, HeroWhereMedium]}
        position="0 30%"
        socialLinks={socialLinks}
        title={texts.title}
      />
      <Content>
        <MapImage
          src={getMapImage()}
          alt={texts.mapAlt}
          onClick={onToggleMap}
        />
      </Content>
    </Section>
  );
};

WhereSection.propTypes = {
  state: StatePropType
};

WhereSection.defaultProps = {
  state: null
};

export default connect(WhereSection);
