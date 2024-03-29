import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { ERROR_TEXTS } from '../../../db';
import { StatePropType } from '../../../types';
import { Container, Description, Text, Title } from './styles';

const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);
  const { colors, language } = state.theme;
  let texts = ERROR_TEXTS[language];

  useEffect(() => {
    texts = ERROR_TEXTS[language];
  }, [language]);

  return (
    <Container>
      <Title colors={colors}>{texts.title}</Title>
      <Description>
        <Text colors={colors}>
          {data.is404 ? texts.message404 : texts.message}
        </Text>
      </Description>
    </Container>
  );
};

Page404.propTypes = {
  state: StatePropType
};

Page404.defaultProps = {
  state: null
};

export default connect(Page404);
