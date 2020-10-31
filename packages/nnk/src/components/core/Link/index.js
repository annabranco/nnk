import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { any } from 'prop-types';
import { StyledLink } from './styles';

const Link = ({
  state,
  actions,
  link,
  className,
  children,
  'aria-current': ariaCurrent
}) => {
  const onClick = event => {
    // Do nothing if it's an external link
    if (link.startsWith('http')) {
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

  return (
    <StyledLink
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  state: any.isRequired,
  actions: any.isRequired,
  link: any.isRequired,
  className: any.isRequired,
  children: any.isRequired,
  'aria-current': any.isRequired
};

export default connect(Link);
