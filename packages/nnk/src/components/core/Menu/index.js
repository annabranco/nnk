import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect, Global } from 'frontity';
import { any } from 'prop-types';
import { CloseIcon, HamburgerIcon } from '../MenuIcon';
import MenuModal from '../MenuModal';
import { MenuToggle } from './styles';

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: 'hidden' } }} />
            <CloseIcon color="white" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="white" size="24px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

MobileMenu.propTypes = {
  state: any.isRequired,
  actions: any.isRequired
};

export default connect(MobileMenu);
