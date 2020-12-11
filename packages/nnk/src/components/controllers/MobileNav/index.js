import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect, Global } from 'frontity';
import { CloseIcon, HamburgerIcon } from '../Header/MenuIcon';
import MenuModal from '../../views/MenuModal';
import { ActionsPropType, StatePropType } from '../../../types';
import { MenuToggle } from './styles';

const MobileMenu = ({ state, actions }) => {
  const { colors, isMobileMenuOpen, language } = state.theme;

  return (
    <>
      <MenuToggle
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
            currentPage={state.router.link}
            language={language}
          />
        </>
      )}
    </>
  );
};

MobileMenu.propTypes = {
  state: StatePropType.isRequired,
  actions: ActionsPropType.isRequired
};

export default connect(MobileMenu);
