import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { string } from 'prop-types';
// import InDevelopment from '../InDevelopment';
import { FOOTER_TEXTS } from '../../../db';
import { ColorsPropType } from '../../../types';
import { FooterContainer, FooterLink, FooterText } from './styles';

const Footer = ({ colors, language }) => {
  let texts = FOOTER_TEXTS[language];

  useEffect(() => {
    texts = FOOTER_TEXTS[language];
  }, [language]);

  return (
    <FooterContainer colors={colors}>
      <FooterLink colors={colors} link="/privacy">
        {texts.privacyInfo}
      </FooterLink>
      <FooterText colors={colors} link="">
        NO NAME KITCHEN © 2021
      </FooterText>
    </FooterContainer>
  );
};

Footer.propTypes = {
  colors: ColorsPropType.isRequired,
  language: string.isRequired
};

export default Footer;
