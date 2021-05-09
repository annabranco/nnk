import React, { Fragment, useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { string } from 'prop-types';
import { ACTIONS_TEXTS, MAIN_SECTIONS } from '../../../db';
import Link from '../../core/Link';
import { ColorsPropType } from '../../../types';
import {
  Title,
  Smaller,
  ParentTitle,
  NavHeader,
  ModalWindow,
  MenuOverlay,
  MenuContent,
  LittleSmaller,
  Item,
  BackTitle
} from './styles';
import { SubItemRed } from '../NavItem/styles';

const MenuModal = ({ colors, language }) => {
  let navSections = MAIN_SECTIONS[language];
  const backText = ACTIONS_TEXTS[language].back;
  const [currentTree, changeTree] = useState(navSections);
  const [parentName, setParentName] = useState(false);

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
    if (language !== 'en' && subitem.toLowerCase() !== 'no name news') {
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

  const onClickItem = ({ subItems, title }) => {
    if (subItems) {
      changeTree(subItems);
      setParentName(title);
    }
  };

  const resetMenu = () => {
    changeTree(navSections);
    setParentName(false);
  };

  useEffect(() => {
    navSections = MAIN_SECTIONS[language];
  }, [language, parentName]);

  return (
    <ModalWindow>
      <MenuOverlay colors={colors} />
      {parentName && (
        <NavHeader>
          <BackTitle colors={colors} onClick={resetMenu}>
            {backText}
          </BackTitle>
          <ParentTitle colors={colors}>{parentName}</ParentTitle>
        </NavHeader>
      )}

      <MenuContent>
        {currentTree.map(section => (
          <Item key={section.title} onClick={() => onClickItem(section)}>
            {!section.subItems && section.link ? (
              <Link link={section.link}>
                <Title colors={colors}>{styleSubItems(section.title)}</Title>
              </Link>
            ) : (
              <Title colors={colors}>{styleTitle(section.title)}</Title>
            )}
          </Item>
        ))}
      </MenuContent>
    </ModalWindow>
  );
};

MenuModal.propTypes = {
  colors: ColorsPropType.isRequired,
  language: string.isRequired
};

export default connect(MenuModal);
