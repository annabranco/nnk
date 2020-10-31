import { styled } from 'frontity';

export const NavContainer = styled.nav`
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

// const NavItem2 = styled.div`
//   font-family: 'Bebas Neue', sans-serif;

//   padding: 0;
//   margin: 0 16px;
//   color: #fff;
//   font-size: 1.6rem;
//   box-sizing: border-box;
//   flex-shrink: 0;

//   & > a {
//     display: inline-block;
//     line-height: 2em;
//     border-bottom: 2px solid;
//     border-bottom-color: transparent;
//     /* Use for semantic approach to style the current link */
//     &[aria-current='page'] {
//       border-bottom-color: #fff;
//     }
//   }

//   &:first-of-type {
//     margin-left: 0;
//   }

//   &:last-of-type {
//     margin-right: 0;

//     &:after {
//       content: '';
//       display: inline-block;
//       width: 24px;
//     }
//   }
// `;
