import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { getFormatedDate, updatedReadPosts } from '../../../utils';
import { ACTIONS_TEXTS, NEWS_SECTIONS } from '../../../db';
import FeaturedMedia from '../FeaturedMedia';
import Link from '../Link';
import List from '../List';
import {
  ActionsPropType,
  LibrariesPropTypes,
  StatePropType
} from '../../../types';
import {
  BackToReports,
  Container,
  Content,
  DateWrapper,
  Title,
  PostWrapper,
  BackToReportsArrow
} from './styles';

const Post = ({ actions, libraries, state }) => {
  const [read, toggleRead] = useState(false);
  const { colors, language } = state.theme;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  // const author = state.source.author[post.author];
  const date = new Date(post.date);
  const Html2React = libraries.html2react.Component;
  const isReport = post.slug.includes('report');
  let texts = ACTIONS_TEXTS[language];
  let newsSection = NEWS_SECTIONS[language];

  const onRead = () => {
    toggleRead(true);
  };

  const getTitle = () => {
    const metaTitle = `_${language}_post_title`;
    return post.meta[metaTitle] || post.title.rendered;
  };
  const getNewsText = () => {
    const metaContent = `_${language}_post_content`;
    return post.meta[metaContent] || post.excerpt.rendered;
  };

  useEffect(() => {
    newsSection = NEWS_SECTIONS[language];
    texts = ACTIONS_TEXTS[language];
  }, [language]);

  useEffect(() => {
    const onReadAll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight / 2
      ) {
        setTimeout(() => {
          onRead();
        }, 1000);
      }
    };

    actions.source.fetch('/');
    List.preload();
    actions.theme.updateRead(updatedReadPosts(data.id));
    window.addEventListener('scroll', onReadAll);
    return () => {
      toggleRead(false);
      window.removeEventListener('scroll', onReadAll);
    };
  }, []);

  return data.isReady ? (
    <PostWrapper colors={colors}>
      <Container colors={colors}>
        {isReport && read && (
          <Link link="/category/monthly-report/">
            <BackToReports colors={colors}>
              {`<< ${texts.backToReports}`}
            </BackToReports>
          </Link>
        )}
        {!isReport && read && (
          <Link link="/news/">
            <BackToReports colors={colors}>
              <BackToReportsArrow className="fas fa-chevron-circle-left" />{' '}
              {texts.backToNews}
            </BackToReports>
          </Link>
        )}
        <div>
          <Title
            colors={colors}
            dangerouslySetInnerHTML={{ __html: getTitle() }}
            isReport={isReport}
          />

          {/* Only display author and date on posts */}
          {data.isPost && (
            <div>
              {/* {author && (
              <StyledLink link={author.link}>
                <Author colors={colors}>
                  By <b>{author.name}</b>
                </Author>
              </StyledLink>
            )} */}
              <DateWrapper colors={colors} isReport={isReport}>
                {`${newsSection.publishedOn} ${getFormatedDate(
                  date,
                  language
                )}`}{' '}
              </DateWrapper>
            </div>
          )}
        </div>

        {state.theme.featured.showOnPost && (
          <FeaturedMedia id={post.featured_media} />
        )}

        <Content colors={colors} isReport={isReport}>
          <Html2React html={getNewsText()} />
        </Content>
      </Container>
    </PostWrapper>
  ) : null;
};

Post.propTypes = {
  actions: ActionsPropType,
  libraries: LibrariesPropTypes,
  state: StatePropType
};

Post.defaultProps = {
  actions: null,
  libraries: null,
  state: null
};

export default connect(Post);
