import React, { Fragment, useState } from 'react';
import { string } from 'prop-types';
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
  SubItemRed,
  Title
} from './styles';

const NavItem = ({ colors, language, section }) => {
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

  const styleSubItems = subitem => {
    if (language !== 'en') {
      if (subitem.toLowerCase().includes('w')) {
        const updatedSubItem = subitem.toLowerCase().split('w');

        updatedSubItem[1] = (
          <Fragment key={`sub-${subitem}`}>
            <SubItemRed colors={colors}>W</SubItemRed>
            {updatedSubItem[1]}
          </Fragment>
        );
        return updatedSubItem;
      }
    }
    return subitem;
  };

  return (
    <Item onMouseOut={() => toggleIsActive(false)}>
      {!section.subItems && section.link ? (
        <Link link={section.link}>
          <Title
            colors={colors}
            isActive={isActive}
            onMouseOver={() => toggleIsActive(true)}
          >
            {styleTitle(section.title)}
          </Title>
        </Link>
      ) : (
        <Title
          colors={colors}
          isActive={isActive}
          onMouseOver={() => toggleIsActive(true)}
        >
          {styleTitle(section.title)}
        </Title>
      )}
      <CollapsableItems isActive={isActive}>
        <ItemsList colors={colors} onMouseOver={() => toggleIsActive(true)}>
          {section.subItems &&
            section.subItems.map(subItem => (
              <SubItem key={subItem.title} link={subItem.link}>
                <ItemLink
                  colors={colors}
                  key={`li-${subItem.title}`}
                  isLengthy={subItem.title.length > 7}
                >
                  {styleSubItems(subItem.title)}
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
  language: string.isRequired,
  section: NavSectionPropType.isRequired
};

export default NavItem;
