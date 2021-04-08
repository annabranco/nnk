/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'frontity';
import { bool } from 'prop-types';
import Link from '../../core/Link';
import FeaturedMedia from '../../core/FeaturedMedia';
import { ItemPropType, StatePropType, TextsNewsPropType } from '../../../types';
import { ArticleWrapper, Excerpt, PublishDate, Title, InfoBox } from './styles';
import { getFormatedDate, getMediaQuery } from '../../../utils';
import { MOBILE } from '../../../constants/devices';

const NewsItem = ({ state, item, read, texts }) => {
  const { colors, language } = state.theme;
  const date = new Date(item.date);
  const MOBILE_VERSION = getMediaQuery() === MOBILE;

  const clearOriginalLink = excerpt => {
    return excerpt.split('<p class="link-more">')[0];
  };

  return (
    <>
      {item.featured_media !== 0 && (
        <ArticleWrapper colors={colors} highlight={item.tags.includes(263)}>
          <Link link={item.link}>
            <FeaturedMedia id={item.featured_media} news />
            <Title
              colors={colors}
              dangerouslySetInnerHTML={{ __html: item.title.rendered }}
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
                  __html: clearOriginalLink(item.excerpt.rendered)
                }}
              />
            </Link>
          )}
        </ArticleWrapper>
      )}
    </>
  );
};

NewsItem.propTypes = {
  state: StatePropType.isRequired,
  item: ItemPropType.isRequired,
  read: bool.isRequired,
  texts: TextsNewsPropType.isRequired
};

export default connect(NewsItem);
