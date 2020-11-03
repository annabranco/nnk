import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { any } from 'prop-types';
import MAIN_SECTIONS from '../../../db/nav.json';
// import Link from '../../core/Link';
import NavItem from '../../views/NavItem';
// import { MAIN_SECTIONS } from '../../core/sections';
import { NavContainer } from './styles';

const Nav = ({ state }) => {
  const { colors, language } = state.theme;
  let navSections = MAIN_SECTIONS[language];

  useEffect(() => {
    navSections = MAIN_SECTIONS[language];
  }, [language]);

  return (
    <NavContainer>
      {navSections.map(item => (
        <NavItem key={item.title} item={item} colors={colors} />
      ))}
    </NavContainer>
  );
};

// {
//   state.theme.menu.map(([name, link]) => {
//     // Check if the link matched the current page url
//     const isCurrentPage = state.router.link === link;
//     if (link === "/") return;
//     return (
//       <NavItem key={name}>
//         {/* If link url is the current page, add `aria-current` for a11y */}
//         <Link
//           link={link}
//           aria-current={isCurrentPage ? "page" : undefined}
//         >
//           {name.toUpperCase()}
//         </Link>
//       </NavItem>
//     );
//   });
// }

Nav.propTypes = {
  state: any.isRequired
};

export default connect(Nav);
