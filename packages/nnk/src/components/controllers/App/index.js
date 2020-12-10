import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Global, connect, Head } from 'frontity';
import Switch from '@frontity/components/switch';
// import Footer from '../../views/Footer';
import Header from '../Header';
import List from '../../core/List';
import Loading from '../../core/Loading';
import MainPage from '../MainPage';
import PageError from '../../core/ErrorComponent';
import Post from '../../core/Post';
import Title from '../../core/HtmlTitle';
import WhatSection from '../../views/What';
import WhereSection from '../../views/Where';
import WhySection from '../../views/Why';
import JumpToTheFieldSection from '../../views/JumpToTheField';
import { globalStyles } from '../../../setup/globalStyles';
import { MainArea } from './styles';
import { StatePropType } from '../../../types';
import { fontText, fontTitle } from '../../../setup/themes';
import HelpUs from '../../views/HelpUs';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const App = ({ state }) => {
  const { colors } = state.theme;
  const data = state.source.get(state.router.link);
  // console.log('$$$ navigator.userAgent', window.navigator.userAgent);

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
        <script src="https://smtpjs.com/v3/smtp.js" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      <Global
        styles={{
          body: { background: colors.primary, fontFamily: fontText },
          p: { color: colors.secondary },
          h1: { color: colors.terciary, fontFamily: fontTitle },
          h2: { color: colors.secondary, fontFamily: fontTitle },
          h3: { color: colors.secondary, fontFamily: fontTitle }
        }}
      />

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <MainArea colors={colors}>
        <Switch>
          {/* <WhatSection path="/what/" /> */}

          <MainPage when={data.link === '/'} />
          <WhatSection when={state.router.link === '/what/'} />
          <WhereSection when={state.router.link === '/where/'} />
          <WhySection when={state.router.link === '/why/'} />
          <JumpToTheFieldSection when={state.router.link === '/join-us/'} />
          <HelpUs when={state.router.link === '/help-us/'} />

          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </MainArea>
      {/* <Footer colors={colors} /> */}
    </>
  );
};

App.propTypes = {
  state: StatePropType.isRequired
};

export default connect(App);
