import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { MenuContent, MenuLink, MenuOverlay } from './styles';
import { StatePropType } from '../../../types';

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? 'page' : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </>
  );
};

MenuModal.propTypes = {
  state: StatePropType.isRequired
};

export default connect(MenuModal);
