import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Global, connect, Head } from 'frontity';
// eslint-disable-next-line import/no-unresolved
import Switch from '@frontity/components/switch';
import { fontText, fontTitle } from '../../../setup/themes';
import Footer from '../../views/Footer';
import Header from '../Header';
import HelpUs from '../../views/HelpUs';
import JumpToTheFieldSection from '../../views/JumpToTheField';
import List from '../../core/List';
import Loading from '../../core/Loading';
import MainPage from '../MainPage';
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
import News from '../News';
import { updatedReadPosts } from '../../../utils';

const App = ({ state, actions }) => {
  const { colors, language } = state.theme;
  const data = state.source.get(state.router.link);

  useEffect(() => {
    actions.theme.updateRead(updatedReadPosts());
  }, []);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
        <link rel="icon" type="image/png" href={Favicon} sizes="32x32" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;700"
          rel="stylesheet"
        />
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
  state: StatePropType.isRequired,
  actions: ActionsPropType.isRequired
};

export default connect(App);
