import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import InDevelopment from '../InDevelopment';
import { FooterContainer, FooterLink } from './styles';
import { ColorsPropType } from '../../../types';

const Footer = ({ colors }) => (
  <FooterContainer colors={colors}>
    <InDevelopment>
      <FooterLink colors={colors} link="/players">
        Copyright NNK 2020
      </FooterLink>
    </InDevelopment>
    <InDevelopment>
      <FooterLink colors={colors} link="/players">
        Contact
      </FooterLink>
    </InDevelopment>
    <InDevelopment>
      <FooterLink colors={colors} link="/players">
        Privacy Policy
      </FooterLink>
    </InDevelopment>
    <InDevelopment>
      <FooterLink colors={colors} link="/players">
        Cookies Policy
      </FooterLink>
    </InDevelopment>
  </FooterContainer>
);

Footer.propTypes = {
  colors: ColorsPropType.isRequired
};

export default Footer;
