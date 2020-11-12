import React, { useEffect } from 'react';
import { connect } from 'frontity';
import SectionHeader from '../SectionHeader';
import { getSocialLinks } from '../../../utils';
import { WHAT_TEXTS } from '../../../db';
import {
  WhatBG,
  Program01,
  Program02,
  Program03
} from '../../../assets/images';
import {
  Content,
  DescriptionArea,
  DescriptionTitle,
  Image,
  Intro,
  Program,
  Section,
  SubTitle,
  Text
} from './styles';
import { StatePropType } from '../../../types';

const WhatSection = ({ state }) => {
  const { colors, language } = state.theme;
  let texts = WHAT_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);
  const images = [Program01, Program02, Program03];

  useEffect(() => {
    texts = WHAT_TEXTS[language];
  }, [language]);

  return (
    <Section colors={colors}>
      <SectionHeader
        colors={colors}
        img={WhatBG}
        position="0 76%"
        socialLinks={socialLinks}
        title={texts.title}
      />
      <Content>
        <Intro>{texts.intro}</Intro>
        <SubTitle colors={colors}>{texts.programsTitle}</SubTitle>
        {texts.programs.map((program, index) => (
          <Program key={program.id}>
            <Image img={images[index]} />
            <DescriptionArea>
              <DescriptionTitle>{program.title}</DescriptionTitle>
              <Text>{program.description}</Text>
            </DescriptionArea>
          </Program>
        ))}
      </Content>
    </Section>
  );
};

WhatSection.propTypes = {
  state: StatePropType.isRequired
};

export default connect(WhatSection);
