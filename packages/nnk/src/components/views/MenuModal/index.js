/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'frontity';
import { func, string } from 'prop-types';
import { ACTIONS_TEXTS, MAIN_SECTIONS } from '../../../db';
import Link from '../../core/Link';
import EnglishFlag from '../../../assets/images/icons/uk.png';
import SpanishFlag from '../../../assets/images/icons/es.png';
import { ColorsPropType } from '../../../types';
import { SubItemRed } from '../NavItem/styles';
import { LanguageFlag } from '../../controllers/Header/styles';
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

const MenuModal = ({ colors, language, onClickFlag }) => {
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
    changeTree(navSections);
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
      <LanguageFlag
        src={language === 'es' ? EnglishFlag : SpanishFlag}
        id={language === 'en' ? 'es' : 'en'}
        onClick={() => onClickFlag(language === 'en' ? 'es' : 'en')}
      />
    </ModalWindow>
  );
};

MenuModal.propTypes = {
  colors: ColorsPropType.isRequired,
  language: string.isRequired,
  onClickFlag: func.isRequired
};

export default connect(MenuModal);
