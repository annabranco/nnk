import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { string } from 'prop-types';
// import InDevelopment from '../InDevelopment';
import { FOOTER_TEXTS } from '../../../db';
import { ColorsPropType } from '../../../types';
import { FooterContainer, FooterLink, FooterText } from './styles';
import AppModal from '../../core/AppModal';
import PrivacyDeclaration from '../PrivacyDeclaration';

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
        NO NAME KITCHEN © 2021
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
