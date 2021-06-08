// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect } from 'react';
import { connect } from 'frontity';
import { NEWS_SECTIONS } from '../../../db';
import Pagination from '../../core/List/pagination';
import NewsItem from '../../views/NewsItem';
import { StatePropType } from '../../../types';
import { NewsSection, NewsWrapper } from './styles';

const News = ({ state }) => {
  const { colors, language, postsRead } = state.theme;
  const data = state.source.get(state.router.link);
  let newsSection = NEWS_SECTIONS[language];

  useEffect(() => {
    newsSection = NEWS_SECTIONS[language];
  }, [language]);

  return (
    <NewsSection colors={colors}>
      <NewsWrapper colors={colors}>
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          return (
            <NewsItem
              item={item}
              key={item.id}
              read={postsRead.includes(item.id)}
              texts={newsSection}
            />
          );
        })}
      </NewsWrapper>
      <Pagination />
    </NewsSection>
  );
};

News.propTypes = {
  state: StatePropType
};

News.defaultProps = {
  state: null
};

export default connect(News);
