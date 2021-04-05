import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { MAIN_SECTIONS } from '../../../db';
import { StatePropType } from '../../../types';

const News = ({ state }) => {
  const { colors, language } = state.theme;
  const news = state.source.data['/news/'].items;
  let navSections = MAIN_SECTIONS[language];

  console.log('$$$ state.source.data', state.source.data);
  console.log('$$$ news', news);

  useEffect(() => {
    navSections = MAIN_SECTIONS[language];
  }, [language]);

  return (
    <div>
      <p>Hello!</p>
    </div>
  );
};

News.propTypes = {
  state: StatePropType.isRequired
};

export default connect(News);
