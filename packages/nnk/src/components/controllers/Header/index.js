import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import Nav from '../Nav';
import MobileNav from '../MobileNav';
import LogoPng from '../../../assets/images/logo/logo-small.png';
import SpanishFlag from '../../../assets/images/icons/es.png';
import EnglishFlag from '../../../assets/images/icons/uk.png';
import { HeaderContainer, LanguageFlag, Logo } from './styles';
import config from '../../../setup/config';
import { LIGHT, DARK } from '../../../constants/theme';
import Link from '../../core/Link';
import { StatePropType, ActionsPropType } from '../../../types';
import { getMediaQuery } from '../../../utils';
import { MOBILE } from '../../../constants/devices';

const Header = ({ state, actions }) => {
  const [activeLanguage, changeLanguage] = useState('es');
  const { colors } = state.theme;
  const { changeTheme } = actions.theme;
  const MOBILE_VERSION = getMediaQuery() === MOBILE;

  const onClickFlag = () => {
    changeLanguage(activeLanguage === 'en' ? 'es' : 'en');
    changeTheme(activeLanguage === 'en' ? DARK : LIGHT);
  };

  useEffect(() => {
    if (activeLanguage === 'es') {
      config.theme = DARK;
    } else {
      config.theme = LIGHT;
    }
  }, [activeLanguage]);

  console.log('$$$ getMediaQuery()', getMediaQuery());

  return (
    <HeaderContainer activeLanguage={activeLanguage} colors={colors}>
      <Link link="/">
        <Logo activeLanguage={activeLanguage} src={LogoPng} />
      </Link>
      {MOBILE_VERSION ? <MobileNav /> : <Nav />}
      <LanguageFlag
        src={activeLanguage === 'en' ? EnglishFlag : SpanishFlag}
        onClick={onClickFlag}
      />
    </HeaderContainer>
  );
};

Header.propTypes = {
  state: StatePropType.isRequired,
  actions: ActionsPropType.isRequired
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
