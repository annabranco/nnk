import React, { useEffect } from 'react';
import { connect } from 'frontity';
import { getSocialLinks } from '../../../utils';
import { WHERE_TEXTS } from '../../../db';
import SectionHeader from '../SectionHeader';
import { Mapv1, Photo05 } from '../../../assets/images';
import { StatePropType } from '../../../types';
import { Content, Map, Section } from './styles';

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
        img={Photo05}
        position="0 30%"
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
