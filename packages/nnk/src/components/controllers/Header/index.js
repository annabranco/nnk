import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import config from '../../../setup/config';
import Link from '../../core/Link';
import MobileNav from '../MobileNav';
import Nav from '../Nav';
import EnglishFlag from '../../../assets/images/icons/uk.png';
import SpanishFlag from '../../../assets/images/icons/es.png';
import { LIGHT, DARK } from '../../../constants/theme';
import { LogoSmall } from '../../../assets/images';
import { StatePropType, ActionsPropType } from '../../../types';
import { HeaderContainer, LanguageFlag, Logo } from './styles';

const Header = ({ state, actions }) => {
  const [activeLanguage, changeActiveLanguage] = useState('en');
  const { colors } = state.theme;
  const { changeLanguage } = actions.theme;

  const onClickFlag = flag => {
    changeActiveLanguage(flag);
    changeLanguage(flag);
    localStorage.setItem('nnk-defaultLang', flag);
  };

  useEffect(() => {
    if (activeLanguage === 'es') {
      config.theme = DARK;
    } else {
      config.theme = LIGHT;
    }
  }, [activeLanguage]);

  useEffect(() => {
    const language = localStorage.getItem('nnk-defaultLang');
    if (language && language !== activeLanguage) {
      localStorage.getItem('nnk-defaultLang');
      changeActiveLanguage(language);
      changeLanguage(language);
    }
  }, []);

  return (
    <HeaderContainer activeLanguage={activeLanguage} colors={colors}>
      <Link link="/">
        <Logo activeLanguage={activeLanguage} src={LogoSmall} />
      </Link>
      <MobileNav onClickFlag={onClickFlag} /> : <Nav />
      <LanguageFlag
          id={activeLanguage === 'en' ? 'es' : 'en'}
          onClick={() => onClickFlag(activeLanguage === 'en' ? 'es' : 'en')}
          src={activeLanguage === 'es' ? EnglishFlag : SpanishFlag}
        />
    </HeaderContainer>
  );
};

Header.propTypes = {
  actions: ActionsPropType,
  state: StatePropType
};

Header.defaultProps = {
  actions: null,
  state: null
};

export default connect(Header);
