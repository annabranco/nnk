// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect } from 'react';
import { connect } from 'frontity';
import Pagination from '../../core/List/pagination';
import { StatePropType } from '../../../types';
import { NewsSection, NewsWrapper } from './styles';
import { NEWS_SECTIONS } from '../../../db';
import NewsItem from '../../views/NewsItem';

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
              key={item.id}
              item={item}
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
  state: StatePropType.isRequired
};

export default connect(News);
