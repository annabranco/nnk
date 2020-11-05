import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Global, connect, Head } from 'frontity';
import Switch from '@frontity/components/switch';
import Header from '../Header';
import List from '../../core/List';
import Post from '../../core/Post';
import Loading from '../../core/Loading';
import Title from '../../core/HtmlTitle';
import PageError from '../../core/ErrorComponent';
import MainPage from '../MainPage';
import Footer from '../../views/Footer';
import { globalStyles } from '../../../setup/globalStyles';
import { MainArea } from './styles';
import { StatePropType } from '../../../types';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const App = ({ state }) => {
  const { colors } = state.theme;

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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
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
      <MainArea colors={colors}>
        <Switch>
          <MainPage when={data.link === '/'} />
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </MainArea>
      <Footer colors={colors} />
    </>
  );
};

App.propTypes = {
  state: StatePropType.isRequired
};

export default connect(App);
