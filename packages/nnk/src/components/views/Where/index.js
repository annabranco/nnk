import React, { useEffect } from 'react';
import { connect } from 'frontity';
import SectionHeader from '../SectionHeader';
import { getSocialLinks } from '../../../utils';
import { WHERE_TEXTS } from '../../../db';
import { Mapv1, Photo01 } from '../../../assets/images';
import { Content, Map, Section } from './styles';
import { StatePropType } from '../../../types';

const WhereSection = ({ state }) => {
  const { colors, language } = state.theme;
  let texts = WHERE_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  useEffect(() => {
    texts = WHERE_TEXTS[language];
  }, [language]);

  return (
    <Section colors={colors}>
      <SectionHeader
        colors={colors}
        img={Photo01}
        position="0 20%"
        socialLinks={socialLinks}
        title={texts.title}
      />
      <Content>
        <Map src={Mapv1} alt={texts.mapAlt} />
      </Content>
    </Section>
  );
};

WhereSection.propTypes = {
  state: StatePropType.isRequired
};

export default connect(WhereSection);
