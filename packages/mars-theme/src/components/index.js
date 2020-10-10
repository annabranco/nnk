import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Global, css, connect, styled, Head } from 'frontity';
import Switch from '@frontity/components/switch';
import Header from './header';
import List from './list';
import Post from './post';
import Loading from './loading';
import Title from './title';
import PageError from './page-error';
import MainPage from './views/MainPage';
import Footer from './views/Footer';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@600&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/7d8d592f81.js"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <MainPage when={data.link === '/'} />
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
