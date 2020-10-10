import React, { useState } from 'react';
import { connect, styled, css } from 'frontity';
import Link from './Link';

const NavTitle = ({ item }) => {
  const [isActive, toggleIsActive] = useState(false);

  return (
    <>
      <NavItem onMouseOut={() => toggleIsActive(false)}>
        <Link link={!item.subItems && item.link ? item.link : undefined}>
          <Title isActive={isActive} onClick={() => toggleIsActive(true)}>
            {item.title.toUpperCase()}
          </Title>
        </Link>
        <CollapsableItems isActive={isActive}>
          <ItemsList onMouseOver={() => toggleIsActive(true)}>
            {item.subItems &&
              item.subItems.map((subItem) => (
                <Link key={subItem.title} link={subItem.link}>
                  <ItemLink
                    key={subItem.title}
                    isLengthy={subItem.title.length > 7}
                  >
                    {subItem.title.toUpperCase()}
                  </ItemLink>
                </Link>
              ))}
          </ItemsList>
        </CollapsableItems>
      </NavItem>
    </>
  );
};

export default NavTitle;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-family: 'Saira Extra Condensed', sans-serif;
  font-weight: normal;
  font-size: 1.8rem;
  margin-bottom: 0;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'red' : 'white')};
  transition: color ease 0.3s;
`;

const CollapsableItems = styled.div`
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  position: relative;
  background: yellow;
  width: auto;
  transition: visibility ease 0.3s;
  z-index: 900;
`;

const ItemsList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  font-size: 1.6rem;
  margin: 0;
  background: black;
  min-width: 130px;
`;

const ItemLink = styled.li`
  font-family: 'Saira Extra Condensed', sans-serif;
  list-style: none;
  margin: 0 10px;
  width: ${({ isLengthy }) => (isLengthy ? '160px' : 'auto')};
  cursor: pointer;
  height: 40px;

  &:hover {
    color: red;
  }
`;

const NavItem2 = styled.div`
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
