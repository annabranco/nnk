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
    if (link.startsWith('https')) {
      window.open(link, '_blank').focus();
      event.preventDefault();
      return;
    }

    event.preventDefault();
    actions.router.set(link);

    window.scrollTo(0, 0);

    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
  };

  return (
    <StyledLink
      aria-current={ariaCurrent}
      className={className}
      colors={colors}
      href={link}
      onClick={onClick}
      target={target}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  'aria-current': string,
  actions: ActionsPropType,
  children: node.isRequired,
  className: string,
  link: string,
  state: StatePropType,
  target: string
};

Link.defaultProps = {
  'aria-current': null,
  actions: null,
  className: null,
  link: null,
  state: null,
  target: null
};

export default connect(Link);
