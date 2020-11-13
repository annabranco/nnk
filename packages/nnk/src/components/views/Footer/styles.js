import { styled } from 'frontity';
import Link from '../../core/Link';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: line;
  justify-content: space-around;
  align-items: center;
  background: ${({ colors }) => colors && colors.primary};
  height: 55px;
  padding: 0 100px;
  padding-top: 10px;
`;
FooterContainer.displayName = 'FooterContainer';

export const FooterLink = styled.p`
  margin: 10px 0;
  text-transform: uppercase;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
  color: ${({ colors }) => colors && colors.secondary};
  cursor: pointer;

  transition: color ease 0.3s;

  &:hover {
    color: ${({ colors }) => colors && colors.terciary};
  }
`;
FooterLink.displayName = 'FooterLink';
