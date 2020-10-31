import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import InDevelopment from '../InDevelopment';
import { FooterContainer, FooterLink } from './styles';

const Footer = () => (
  <FooterContainer>
    <InDevelopment>
      <FooterLink>Copyright NNK 2020</FooterLink>
    </InDevelopment>
    <InDevelopment>
      <FooterLink>Contact</FooterLink>
    </InDevelopment>
    <InDevelopment>
      <FooterLink>Privacy Policy</FooterLink>
    </InDevelopment>
    <InDevelopment>
      <FooterLink>Cookies Policy</FooterLink>
    </InDevelopment>
  </FooterContainer>
);

export default Footer;
