import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Global, connect, Head } from 'frontity';
// eslint-disable-next-line import/no-unresolved
import Switch from '@frontity/components/switch';
import { fontText, fontTitle } from '../../../setup/themes';
import { updatedReadPosts } from '../../../utils';
import Footer from '../../views/Footer';
import Header from '../Header';
import HelpUs from '../../views/HelpUs';
import JumpToTheFieldSection from '../../views/JumpToTheField';
import List from '../../core/List';
import Loading from '../../core/Loading';
import MainPage from '../MainPage';
import News from '../News';
import PageError from '../../core/ErrorComponent';
import Post from '../../core/Post';
import Title from '../../core/HtmlTitle';
import WhatSection from '../../views/What';
import WhereSection from '../../views/Where';
import WhySection from '../../views/Why';
import Favicon from '../../../assets/images/favicon.png';
import { ActionsPropType, StatePropType } from '../../../types';
import { globalStyles } from '../../../setup/globalStyles';
import { MainArea } from './styles';

const App = ({ state, actions }) => {
  const { colors, language } = state.theme;
  const data = state.source.get(state.router.link);
  const now = new Date();
  const parsedNowISOString = now.toISOString();
  const locale = `${language}_${language.toUpperCase()}`;
  useEffect(() => {
    actions.theme.updateRead(updatedReadPosts());
  }, []);

  return (
    <>
      <Title />
      <Head>
        <html lang={language} />
        <meta charset="UTF-8" />
        <meta content="global" name="distribution" />
        <meta name="description" content={state.frontity.description} />
        <meta name="article:author" content="No Name Kitchen" />
        <meta name="lang" content={language} />
        <meta name="theme-color" content="#0c0c0c" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />

        <meta name="DC.creator" content="No Name Kitchen" />
        <meta
          name="DC.description"
          lang={language}
          content={state.frontity.description}
        />
        <meta name="DC.date" scheme="W3CDTF" content={parsedNowISOString} />
        <meta name="DC.date.issue" content={parsedNowISOString} />
        <meta name="DC.language" scheme="RFC1766" content={locale} />
        <meta name="DC.publisher" content="No Name Kitchen" />
        <meta
          name="DC.subject"
          lang={language}
          content={state.frontity.description}
        />

        <meta name="date" scheme="W3CDTF" content={parsedNowISOString} />
        <meta itemProp="datePublished" content={parsedNowISOString} />
        <meta name="last-modified" content={parsedNowISOString} />
        <meta name="pageDate" content={parsedNowISOString} />
        <meta name="pageRender" content={parsedNowISOString} />

        <meta name="og:description" content={state.frontity.description} />
        <meta property="og:locale" content={locale} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="http://www.nonamekitchen.org/" />
        <meta property="og:site_name" content="No Name Kitchen" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="No Name Kitchen" />

        <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
        <link rel="icon" type="image/png" href={Favicon} sizes="32x32" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;700"
          rel="stylesheet"
        />
        <script src="https://donorbox.org/widget.js" paypalExpress="true" />
        <script
          src="https://kit.fontawesome.com/7d8d592f81.js"
          crossOrigin="anonymous"
        />
        <script src="https://smtpjs.com/v3/smtp.js" />
      </Head>
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

      <Header />

      <MainArea colors={colors}>
        <Switch>
          <MainPage when={data.link === '/'} />
          <WhatSection when={state.router.link === '/what/'} />
          <WhereSection when={state.router.link === '/where/'} />
          <WhySection when={state.router.link === '/why/'} />
          <JumpToTheFieldSection when={state.router.link === '/join-us/'} />
          <HelpUs when={state.router.link === '/help-us/'} />
          <News when={data.isNewsList} />
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </MainArea>
      <Footer colors={colors} language={language} />
    </>
  );
};

App.propTypes = {
  state: StatePropType,
  actions: ActionsPropType
};

App.defaultProps = {
  state: null,
  actions: null
};

export default connect(App);
