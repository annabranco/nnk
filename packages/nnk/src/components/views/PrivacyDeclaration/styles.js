import { styled } from 'frontity';
import {
  fontText,
  fontTitle,
  sizeMedium,
  sizeMediumTitle,
  sizeSmallTitle
} from '../../../setup/themes';

export const DeclarationTitle = styled.h2`
  margin: 30px auto;
  font-family: ${fontTitle};
  font-size: ${sizeMediumTitle};
  color: ${({ colors }) => colors.terciary};
`;
export const DeclarationText = styled.p`
  margin: 10px 10px;
`;
DeclarationText.displayName = 'DeclarationText';

export const DeclarationSection = styled.h3`
  margin: 20px 0 0;
  font-family: ${fontTitle};
  font-size: ${sizeSmallTitle};
  text-align: left;
  align-self: flex-start;
`;
DeclarationSection.displayName = 'DeclarationSection';

export const Mail = styled.a`
  font-weight: 700;
  color: red;
  text-decoration: none;
`;
Mail.displayName = 'Mail';

export const Highlight = styled.span`
  font-weight: 700;
  color: crimson;
`;
Highlight.displayName = 'Highlight';

export const DeclarationList = styled.ul`
  margin: 10px 0;
  list-style-type: disc;
`;
DeclarationList.displayName = 'DeclarationList';

export const DeclarationListItem = styled.li`
  margin: 5px 30px;
`;
DeclarationListItem.displayName = 'DeclarationListItem';

export const LoadingSpinner = styled.img`
  width: 40px;
`;
LoadingSpinner.displayName = 'LoadingSpinner';

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  width: 80%;
  text-align: justify;
  color: ${({ colors }) => colors.secondary};
  background: ${({ colors }) => colors && 'rgba(0, 0, 0, 0.6)'};
  padding: 10px;
  line-height: 2;
  font-family: ${fontText};
  font-size: ${sizeMedium};
  border-radius: 10px;
  margin-top: -30px;
  width: 98vw;

  @media all and (min-width: 768px) {
    padding: 40px 20%;
  }
`;
PrivacyContainer.displayName = 'PrivacyContainer';
