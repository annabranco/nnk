import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { MAIN_SECTIONS } from '../../../db';
import NavItem from '../../views/NavItem';
import { StatePropType } from '../../../types';
import { NavContainer } from './styles';

const Nav = ({ state }) => {
  const { colors, language } = state.theme;
  let navSections = MAIN_SECTIONS[language];

  useEffect(() => {
    navSections = MAIN_SECTIONS[language];
  }, [language]);

  return (
    <NavContainer>
      {navSections.map(section => (
        <NavItem
          colors={colors}
          key={section.title}
          language={language}
          section={section}
        />
      ))}
    </NavContainer>
  );
};

Nav.propTypes = {
  state: StatePropType
};

Nav.defaultProps = {
  state: null
};

export default connect(Nav);
