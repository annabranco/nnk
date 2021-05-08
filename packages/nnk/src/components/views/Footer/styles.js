import { styled } from 'frontity';
import { fontTitle, sizeLarge, sizeMedium } from '../../../setup/themes';
import Link from '../../core/Link';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: line;
  justify-content: space-around;
  align-items: center;
  background: ${({ colors }) => colors && colors.primary};
  height: 55px;
  padding: 0;
  padding-top: 20px;

  @media all and (min-width: 768px) {
    padding: 80px 100px 30px;
  }
`;
FooterContainer.displayName = 'FooterContainer';

export const FooterText = styled.p`
  margin: 10px 0;
  text-transform: uppercase;
  font-family: ${fontTitle};
  font-size: ${sizeMedium};
  font-weight: 400;
  color: ${({ colors }) => colors && colors.secondary};

  @media all and (min-width: 768px) {
    /* font-size: ${sizeLarge}; */
    letter-spacing: 1px;
  }
`;
FooterText.displayName = 'FooterText';

export const FooterLink = styled(FooterText)`
  cursor: pointer;
  transition: color ease 0.3s;

  &:hover {
    color: ${({ colors }) => colors && colors.terciary};
  }
`;
FooterLink.displayName = 'FooterLink';
