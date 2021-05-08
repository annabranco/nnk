// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { connect } from 'frontity';
import Link from '../Link';
import FeaturedMedia from '../FeaturedMedia';
import { ItemPropType, StatePropType } from '../../../types';
import { ArticleWrapper, Excerpt, PublishDate, Title, InfoBox } from './styles';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  // const author = state.source.author[item.author];
  const { colors, language } = state.theme;
  const date = new Date(item.date);
  const isReport = item.slug.includes('report');
  const clearOriginalLink = excerpt => {
    return excerpt.split('<p class="link-more">')[0];
  };

  const getTitle = () => {
    const metaTitle = `_${language}_post_title`;
    return item.meta[metaTitle] ?? item.title.rendered;
  };

  return (
    <ArticleWrapper colors={colors} isReport={isReport}>
      <Link link={item.link}>
        <Title
          colors={colors}
          dangerouslySetInnerHTML={{
            __html: getTitle()
          }}
          isReport={isReport}
        />
      </Link>

      <InfoBox isReport={isReport}>
        {/* {author && (
          <StyledLink colors={colors} link={author.link}>
            <AuthorName>
              By <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )} */}
        <PublishDate colors={colors} isReport={isReport}>
          {date.toDateString()}
        </PublishDate>
      </InfoBox>

      {state.theme.featured.showOnList && (
        <Link link={item.link}>
          <FeaturedMedia id={item.featured_media} />
        </Link>
      )}

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Link link={item.link}>
          <Excerpt
            colors={colors}
            dangerouslySetInnerHTML={{
              __html: clearOriginalLink(item.excerpt.rendered)
            }}
            isReport={isReport}
          />
        </Link>
      )}
    </ArticleWrapper>
  );
};

Item.propTypes = {
  state: StatePropType,
  item: ItemPropType.isRequired
};

Item.defaultProps = {
  state: null
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);
