import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import config from '../../../setup/config';
import { getMediaQuery } from '../../../utils';
import { MOBILE } from '../../../constants/devices';
import Link from '../../core/Link';
import MobileNav from '../MobileNav';
import Nav from '../Nav';
// import EnglishFlag from '../../../assets/images/icons/uk.png';
// import SpanishFlag from '../../../assets/images/icons/es.png';
import { LIGHT, DARK } from '../../../constants/theme';
import { LogoSmall } from '../../../assets/images';
import { StatePropType, ActionsPropType } from '../../../types';
import { HeaderContainer, Logo } from './styles';

const Header = ({ state, actions }) => {
  const [activeLanguage, changeLanguage] = useState('es');
  const { colors } = state.theme;
  // const { changeTheme } = actions.theme;
  const MOBILE_VERSION = getMediaQuery() === MOBILE;

  // const onClickFlag = () => {
  //   changeLanguage(activeLanguage === 'en' ? 'es' : 'en');
  //   changeTheme(activeLanguage === 'en' ? DARK : LIGHT);
  // };

  useEffect(() => {
    if (activeLanguage === 'es') {
      config.theme = DARK;
    } else {
      config.theme = LIGHT;
    }
  }, [activeLanguage]);

  return (
    <HeaderContainer activeLanguage={activeLanguage} colors={colors}>
      <Link link="/">
        <Logo activeLanguage={activeLanguage} src={LogoSmall} />
      </Link>
      {MOBILE_VERSION ? <MobileNav /> : <Nav />}
      {/* <LanguageFlag
        src={activeLanguage === 'en' ? EnglishFlag : SpanishFlag}
        onClick={onClickFlag}
      /> */}
    </HeaderContainer>
  );
};

Header.propTypes = {
  state: StatePropType.isRequired,
  actions: ActionsPropType.isRequired
};

export default connect(Header);
