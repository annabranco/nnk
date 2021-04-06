// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import { getSocialLinks } from '../../../utils';
import { WHERE_TEXTS } from '../../../db';
import SectionHeader from '../SectionHeader';
import { Mapv1, Photo05 } from '../../../assets/images';
import { StatePropType } from '../../../types';
import { Content, Map, ModalImage, Section } from './styles';
import AppModal from '../../core/AppModal';

const WhereSection = ({ state }) => {
  const [displayModal, toggleModal] = useState(false);
  const { colors, language } = state.theme;
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);
  let texts = WHERE_TEXTS[language];

  useEffect(() => {
    texts = WHERE_TEXTS[language];
  }, [language]);

  return (
    <Section colors={colors}>
      {displayModal && (
        <AppModal>
          <ModalImage
            src={Mapv1}
            alt={texts.mapAlt}
            onClick={() => toggleModal(false)}
          />
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
        <Map src={Mapv1} alt={texts.mapAlt} onClick={() => toggleModal(true)} />
      </Content>
    </Section>
  );
};

WhereSection.propTypes = {
  state: StatePropType.isRequired
};

export default connect(WhereSection);
