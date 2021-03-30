import { styled } from 'frontity';
import { fontTitle } from '../../../setup/themes';
import Link from '../../core/Link';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: line;
  justify-content: space-around;
  align-items: center;
  background: ${({ colors }) => colors && colors.primary};
  height: 55px;
  padding: 0 100px;
  padding-top: 20px;
`;
FooterContainer.displayName = 'FooterContainer';

export const FooterText = styled.p`
  margin: 10px 0;
  text-transform: uppercase;
  font-family: ${fontTitle};
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ colors }) => colors && colors.secondary};
`;
FooterText.displayName = 'FooterText';

export const FooterLink = styled(Link)`
  margin: 10px 0;
  text-transform: uppercase;
  font-family: ${fontTitle};
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ colors }) => colors && colors.secondary};
  cursor: pointer;

  transition: color ease 0.3s;

  &:hover {
    color: ${({ colors }) => colors && colors.terciary};
  }
`;
FooterLink.displayName = 'FooterLink';
