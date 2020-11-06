import React, { useState } from 'react';
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
import { ColorsPropType, NavSectionPropType } from '../../../types';

const NavItem = ({ colors, section }) => {
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
      <Link link={!section.subItems && section.link ? section.link : undefined}>
        <Title
          isActive={isActive}
          colors={colors}
          onMouseOver={() => toggleIsActive(true)}
        >
          {styleTitle(section.title)}
        </Title>
      </Link>
      <CollapsableItems isActive={isActive}>
        <ItemsList onMouseOver={() => toggleIsActive(true)} colors={colors}>
          {section.subItems &&
            section.subItems.map(subItem => (
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
  colors: ColorsPropType.isRequired,
  section: NavSectionPropType.isRequired
};

export default NavItem;
