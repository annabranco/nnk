import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { ACTIONS_TEXTS } from '../../../db';
import FeaturedMedia from '../FeaturedMedia';
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
import { updatedReadPosts } from '../../../utils';
import Link from '../Link';

const Post = ({ actions, libraries, state }) => {
  const [read, toggleRead] = useState(false);
  const { colors, language } = state.theme;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  // const author = state.source.author[post.author];
  const date = new Date(post.date);
  const Html2React = libraries.html2react.Component;
  const isReport = post.slug.includes('report');
  const texts = ACTIONS_TEXTS[language];

  console.log('$$$ data', data);
  console.log('$$$ post: ', post);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  const onRead = () => {
    toggleRead(true);
  };

  useEffect(() => {
    const onReadAll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        onRead();
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
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
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
                {' '}
                Published on <b>{date.toDateString()}</b>
              </DateWrapper>
            </div>
          )}
        </div>

        {/* Look at the settings to see if we should include the featured image */}
        {state.theme.featured.showOnPost && (
          <FeaturedMedia id={post.featured_media} />
        )}

        {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
        <Content colors={colors} isReport={isReport}>
          <Html2React html={post.content.rendered} />
        </Content>
      </Container>
    </PostWrapper>
  ) : null;
};

Post.propTypes = {
  state: StatePropType.isRequired,
  actions: ActionsPropType.isRequired,
  libraries: LibrariesPropTypes.isRequired
};

export default connect(Post);
