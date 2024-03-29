import { styled, css } from 'frontity';
import {
  BaseTitle,
  fontTitle,
  sizeLargeTitle,
  sizeMediumTitle,
  sizeSmallTitle
} from '../../../setup/themes';
import Link from '../../core/Link';

export const CollapsableItems = styled.div`
  z-index: 900;
  position: relative;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  width: auto;
  transition: visibility ease 0.3s;
`;
CollapsableItems.displayName = 'CollapsableItems';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
Item.displayName = 'Item';

export const ItemLink = styled.li`
  margin: 0 10px;
  height: 40px;
  width: ${({ isLengthy }) => (isLengthy ? '160px' : 'auto')};
  list-style: none;
  font-family: ${fontTitle};
  cursor: pointer;

  ${({ colors }) =>
    css`
      color: ${colors.secondary};

      &:hover {
        text-decoration: none;
        color: ${colors.terciary};
      }
    `}

  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeLargeTitle};
    width: auto;
    margin: 10px;
  }
`;
ItemLink.displayName = 'ItemLink';

export const ItemsList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  background: ${({ colors }) => colors.primary};
  min-width: 130px;
  padding: 12px 0 0;
  font-size: 1.6rem;

  @media (min-height: 1400px) and (min-width: 2000px) {
    width: 300px;
  }
`;
ItemsList.displayName = 'ItemsList';

export const LittleSmaller = styled.span`
  font-size: 1.8rem;
`;
LittleSmaller.displayName = 'LittleSmaller';

export const NavItem2 = styled.div`
  flex-shrink: 0;
  margin: 0 16px;
  padding: 0;
  font-family: ${fontTitle};
  font-size: 1.6rem;
  color: #fff;

  & > a {
    display: inline-block;
    border-bottom: 2px solid;
    line-height: 2em;
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
NavItem2.displayName = 'NavItem2';

export const Smaller = styled.span`
  font-size: 1.4rem;
`;
Smaller.displayName = 'Smaller';

export const SubItem = styled(Link)`
  &:first-of-type {
    margin-top: 20px;
  }
`;
SubItem.displayName = 'SubItem';

export const SubItemRed = styled.span`
  color: ${({ colors }) => colors.terciary};
`;
SubItemRed.displayName = 'SubItemRed';

export const Title = styled(BaseTitle)`
  margin-bottom: 0;
  color: ${({ isActive, colors }) =>
    isActive ? colors.terciary : colors.secondary};
  cursor: pointer;
  transition: color ease 0.3s;

  @media all and (min-width: 768px) {
    font-size: ${sizeSmallTitle};
  }

  @media all and (min-width: 1200px) {
    font-size: ${sizeMediumTitle};
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    font-size: ${sizeLargeTitle};
  }
`;
Title.displayName = 'Title';
