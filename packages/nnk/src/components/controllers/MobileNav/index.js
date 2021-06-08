/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect, Global } from 'frontity';
import { func } from 'prop-types';
import { CloseIcon, HamburgerIcon } from '../Header/MenuIcon';
import MenuModal from '../../views/MenuModal';
import { ActionsPropType, StatePropType } from '../../../types';
import { MenuToggle } from './styles';

const MobileMenu = ({ state, actions, onClickFlag }) => {
  const { colors, isMobileMenuOpen, language } = state.theme;

  return (
    <>
      <MenuToggle
        colors={colors}
        onClick={actions.theme.toggleMobileMenu}
        opened={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <>
            <Global styles={{ '#root': { overflow: 'hidden' } }} />
            <CloseIcon color="white" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="white" size="30px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && (
        <>
          <MenuModal
            colors={colors}
            language={language}
            onClickFlag={onClickFlag}
          />
        </>
      )}
    </>
  );
};

MobileMenu.propTypes = {
  actions: ActionsPropType,
  onClickFlag: func.isRequired,
  state: StatePropType
};

MobileMenu.defaultProps = {
  actions: null,
  state: null
};

export default connect(MobileMenu);
