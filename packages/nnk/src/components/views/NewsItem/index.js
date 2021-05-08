/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'frontity';
import { bool } from 'prop-types';
import Link from '../../core/Link';
import FeaturedMedia from '../../core/FeaturedMedia';
import { getFormatedDate, getMediaQuery } from '../../../utils';
import { MOBILE } from '../../../constants/devices';
import { ItemPropType, StatePropType, TextsNewsPropType } from '../../../types';
import {
  ArticleWrapper,
  Excerpt,
  PublishDate,
  Title,
  InfoBox,
  Tag
} from './styles';

const NewsItem = ({ state, item, read, texts }) => {
  const { colors, language } = state.theme;
  const date = new Date(item.date);
  const MOBILE_VERSION = getMediaQuery() === MOBILE;

  const clearOriginalLink = excerpt => {
    return excerpt.split('<p class="link-more">')[0];
  };

  const getTitle = () => {
    const metaTitle = `_${language}_post_title`;
    return item.meta[metaTitle] || item.title.rendered;
  };
  const getExcerpt = () => {
    const metaExcerpt = `_${language}_post_excerpt`;
    return item.meta[metaExcerpt] || item.excerpt.rendered;
  };
  const checkForOnlyTag = () => {
    const metaContent = `_${language}_post_content`;
    if (!item.meta[metaContent]) {
      return true;
    }
    return false;
  };

  return (
    <>
      {item.featured_media !== 0 && (
        <ArticleWrapper colors={colors} highlight={item.tags.includes(263)}>
          <Link link={item.link}>
            <FeaturedMedia id={item.featured_media} news />
            <Title
              colors={colors}
              dangerouslySetInnerHTML={{ __html: getTitle() }}
              read={read && texts.read}
            />
          </Link>

          <InfoBox>
            <PublishDate colors={colors} mobile={MOBILE_VERSION}>
              {MOBILE_VERSION
                ? getFormatedDate(date, language)
                : `${texts.publishedOn} ${getFormatedDate(date, language)}`}
            </PublishDate>
          </InfoBox>

          {item.excerpt && (
            <Link link={item.link}>
              <Excerpt
                colors={colors}
                dangerouslySetInnerHTML={{
                  __html: clearOriginalLink(getExcerpt())
                }}
              />
            </Link>
          )}
          {checkForOnlyTag() && <Tag colors={colors}>{texts.only}</Tag>}
        </ArticleWrapper>
      )}
    </>
  );
};

NewsItem.propTypes = {
  state: StatePropType,
  item: ItemPropType.isRequired,
  read: bool.isRequired,
  texts: TextsNewsPropType.isRequired
};

NewsItem.defaultProps = {
  state: null
};

export default connect(NewsItem);
