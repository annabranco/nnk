// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import { getSocialLinks, toggleBodyScroll } from '../../../utils';
import { WHERE_TEXTS } from '../../../db';
import SectionHeader from '../SectionHeader';
import { Mapv1, Mapv1Es, Photo05 } from '../../../assets/images';
import { StatePropType } from '../../../types';
import { Content, Map, ModalImage, Section } from './styles';
import AppModal from '../../core/AppModal';

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
    if (language === 'es') {
      return Mapv1Es;
    }
    return Mapv1;
  };

  useEffect(() => {
    texts = WHERE_TEXTS[language];
  }, [language]);

  return (
    <Section colors={colors}>
      {displayModal && (
        <AppModal closeAction={onToggleMap}>
          <ModalImage src={getMapImage()} alt={texts.mapAlt} />
        </AppModal>
      )}
      <SectionHeader
        colors={colors}
        img={Photo05}
        position="0 30%"
        socialLinks={socialLinks}
        title={texts.title}
      />
      <Content>
        <Map src={getMapImage()} alt={texts.mapAlt} onClick={onToggleMap} />
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
