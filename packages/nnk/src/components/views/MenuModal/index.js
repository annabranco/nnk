import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { func, string } from 'prop-types';
import { ACTIONS_TEXTS, MAIN_SECTIONS } from '../../../db';
import {
  BackTitle,
  Item,
  LittleSmaller,
  MenuContent,
  MenuOverlay,
  ModalWindow,
  NavHeader,
  ParentTitle,
  Smaller,
  Title
} from './styles';
import { ColorsPropType } from '../../../types';
import Link from '../../core/Link';

const MenuModal = ({ colors, currentPage, language }) => {
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
            <Link
              link={
                !section.subItems && section.link ? section.link : undefined
              }
            >
              <Title colors={colors}>{styleTitle(section.title)}</Title>
            </Link>
          </Item>
        ))}
      </MenuContent>
    </ModalWindow>
  );
};

MenuModal.propTypes = {
  colors: ColorsPropType.isRequired,
  currentPage: string.isRequired,
  language: string.isRequired
};

export default connect(MenuModal);
