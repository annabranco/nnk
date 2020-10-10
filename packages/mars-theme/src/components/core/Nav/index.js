import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect, styled } from 'frontity';
import Link from './Link';
import NavTitle from './NavTitle';
import { NAV_ITEMS } from './items';

const Nav = ({ state }) => {
  return (
    <NavContainer>
      {NAV_ITEMS.map((item) => (
        <NavTitle key={item.title} item={item} />
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

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  justify-content: space-around;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  font-family: 'Saira Extra Condensed', sans-serif;

  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current='page'] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: '';
      display: inline-block;
      width: 24px;
    }
  }
`;
