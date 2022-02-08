/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { FOOTER_TEXTS } from '../../../db';
import AppModal from '../../core/AppModal';
import PrivacyDeclaration from '../PrivacyDeclaration';
import { ColorsPropType } from '../../../types';
import { FooterContainer, FooterLink, FooterText } from './styles';

const Footer = ({ colors, language }) => {
  const [displayModal, toggleModal] = useState(false);
  let texts = FOOTER_TEXTS[language];

  useEffect(() => {
    texts = FOOTER_TEXTS[language];
  }, [language]);

  return (
    <FooterContainer colors={colors}>
      <FooterLink colors={colors} onClick={toggleModal}>
        {texts.privacyInfo}
      </FooterLink>
      <FooterText colors={colors} link="">
        NO NAME KITCHEN©
      </FooterText>
      {displayModal && (
        <AppModal closeAction={() => toggleModal(false)}>
          <PrivacyDeclaration colors={colors} />
        </AppModal>
      )}
    </FooterContainer>
  );
};

Footer.propTypes = {
  colors: ColorsPropType.isRequired,
  language: string.isRequired
};

export default Footer;
