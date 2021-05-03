import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { node, string } from 'prop-types';
import { ActionsPropType, StatePropType } from '../../../types';
import { StyledLink } from './styles';

const Link = ({
  state,
  actions,
  link,
  className,
  children,
  'aria-current': ariaCurrent,
  target
}) => {
  const { colors } = state.theme;

  const onClick = event => {
    // Do nothing if it's an external link
    if (link.startsWith('https')) {
      return;
    }

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);

    // Scroll the page to the top
    window.scrollTo(0, 0);

    // if the menu modal is open, close it so it doesn't block rendering
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
  };
  console.log('$$$ colors', colors);
  return (
    <StyledLink
      colors={colors}
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
      target={target}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  state: StatePropType.isRequired,
  actions: ActionsPropType.isRequired,
  link: string,
  className: string,
  children: node.isRequired,
  'aria-current': string,
  target: string
};

Link.defaultProps = {
  className: null,
  link: null,
  'aria-current': null,
  target: null
};

export default connect(Link);
