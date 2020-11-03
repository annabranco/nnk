import { styled, css } from 'frontity';
import { BaseTitleStyle } from '../../../setup/themes';
import Link from '../../core/Link';

export const LittleSmaller = styled.span`
  font-size: 1.8rem;
`;

export const Smaller = styled.span`
  font-size: 1.4rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Title = styled(BaseTitleStyle)`
  margin-bottom: 0;
  cursor: pointer;
  transition: color ease 0.3s;
  color: ${({ isActive, colors }) =>
    isActive ? colors.terciary : colors.secondary};
`;

export const CollapsableItems = styled.div`
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  position: relative;
  background: yellow;
  width: auto;
  transition: visibility ease 0.3s;
  z-index: 900;
`;

export const ItemsList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px 0 0;
  font-size: 1.6rem;
  margin: 0;
  background: ${({ colors }) => colors.primary};
  min-width: 130px;
`;

export const ItemLink = styled.li`
  font-family: 'Bebas Neue', sans-serif;
  list-style: none;
  margin: 0 10px;
  width: ${({ isLengthy }) => (isLengthy ? '160px' : 'auto')};
  cursor: pointer;
  height: 40px;

  ${({ colors }) =>
    css`
      color: ${colors.secondary};

      &:hover {
        color: ${colors.terciary};
        text-decoration: none;
      }
    `}
`;

export const SubItem = styled(Link)`
  &:first-of-type {
    margin-top: 20px;
  }
`;

export const NavItem2 = styled.div`
  font-family: 'Bebas Neue', sans-serif;

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
