import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { any } from 'prop-types';
import Nav from '../Nav';
// import MobileMenu from './menu';
import LogoPng from '../../../assets/images/logo/logo-small.png';
import SpanishFlag from '../../../assets/images/icons/es.png';
import EnglishFlag from '../../../assets/images/icons/uk.png';
import { HeaderContainer, LanguageFlag, Logo } from './styles';
import config from '../../../setup/config';
import { LIGHT, DARK } from '../../../constants/theme';
import Link from '../../core/Link';

const Header = ({ state, actions }) => {
  const [activeLanguage, changeLanguage] = useState('es');
  const { colors } = state.theme;
  const { changeTheme } = actions.theme;

  const onClickFlag = () => {
    changeLanguage(activeLanguage === 'en' ? 'es' : 'en');
    changeTheme(activeLanguage === 'en' ? DARK : LIGHT);
  };

  useEffect(() => {
    if (activeLanguage === 'es') {
      config.theme = LIGHT;
    } else {
      config.theme = DARK;
    }
  }, [activeLanguage]);

  return (
    <HeaderContainer colors={colors}>
      <Link link="/">
        <Logo src={LogoPng} />
      </Link>
      {/* <MobileMenu /> */}
      <Nav />
      <LanguageFlag
        src={activeLanguage === 'en' ? EnglishFlag : SpanishFlag}
        onClick={onClickFlag}
      />
    </HeaderContainer>
  );
};

Header.propTypes = {
  state: any.isRequired,
  actions: any.isRequired
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
