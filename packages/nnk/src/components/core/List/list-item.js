// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { connect } from 'frontity';
import Link from '../Link';
import FeaturedMedia from '../FeaturedMedia';
import { ItemPropType, StatePropType } from '../../../types';
import { ArticleWrapper, Excerpt, PublishDate, Title, InfoBox } from './styles';

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
  item: ItemPropType.isRequired,
  state: StatePropType
};

Item.defaultProps = {
  state: null
};

export default connect(Item);
