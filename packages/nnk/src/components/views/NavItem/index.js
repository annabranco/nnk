import React, { useState } from 'react';
import { any } from 'prop-types';
import Link from '../../core/Link';
import {
  LittleSmaller,
  Smaller,
  Item,
  Title,
  CollapsableItems,
  ItemsList,
  ItemLink,
  SubItem
} from './styles';

const NavItem = ({ colors, item }) => {
  const [isActive, toggleIsActive] = useState(false);

  const styleTitle = title => {
    if (title === 'our 3Ws') {
      return (
        <>
          <LittleSmaller>our</LittleSmaller> 3W<Smaller>s</Smaller>
        </>
      );
    }
    return title;
  };

  return (
    <Item onMouseOut={() => toggleIsActive(false)}>
      <Link link={!item.subItems && item.link ? item.link : undefined}>
        <Title
          isActive={isActive}
          colors={colors}
          onMouseOver={() => toggleIsActive(true)}
        >
          {styleTitle(item.title)}
        </Title>
      </Link>
      <CollapsableItems isActive={isActive}>
        <ItemsList onMouseOver={() => toggleIsActive(true)} colors={colors}>
          {item.subItems &&
            item.subItems.map(subItem => (
              <SubItem key={subItem.title} link={subItem.link}>
                <ItemLink
                  key={subItem.title}
                  isLengthy={subItem.title.length > 7}
                  colors={colors}
                >
                  {subItem.title.toUpperCase()}
                </ItemLink>
              </SubItem>
            ))}
        </ItemsList>
      </CollapsableItems>
    </Item>
  );
};

NavItem.propTypes = {
  colors: any.isRequired,
  item: any.isRequired
};

export default NavItem;
