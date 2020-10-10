import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { styled } from 'frontity';
import InDevelopment from '../InDevelopment';

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

const FooterContainer = styled.div`
  background: black;
  min-height: 40px;
  display: flex;
  flex-direction: line;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 100px;
`;

const FooterLink = styled.p`
  font-family: 'Saira Extra Condensed', sans-serif;
  font-weight: normal;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'red' : 'white')};
  transition: color ease 0.3s;
  text-transform: uppercase;
  margin: 10px 0;

  &:hover {
    color: red;
  }
`;
