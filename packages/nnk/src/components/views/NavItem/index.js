import React, { useState } from 'react';
import Link from '../../core/Link';
import { ColorsPropType, NavSectionPropType } from '../../../types';
import {
  CollapsableItems,
  Item,
  ItemLink,
  ItemsList,
  LittleSmaller,
  Smaller,
  SubItem,
  Title
} from './styles';

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
          colors={colors}
          isActive={isActive}
          onMouseOver={() => toggleIsActive(true)}
        >
          {styleTitle(section.title)}
        </Title>
      </Link>
      <CollapsableItems isActive={isActive}>
        <ItemsList colors={colors} onMouseOver={() => toggleIsActive(true)}>
          {section.subItems &&
            section.subItems.map(subItem => (
              <SubItem key={subItem.title} link={subItem.link}>
                <ItemLink
                  colors={colors}
                  isLengthy={subItem.title.length > 7}
                  key={subItem.title}
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
