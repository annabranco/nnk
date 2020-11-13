import { styled } from 'frontity';
import { BaseTitle, sizeXXLarge } from '../../../../setup/themes';
import Link from '../../../core/Link';

export const Highlighted = styled.span`
  color: ${({ colors }) => colors && colors.terciary};
`;
Highlighted.displayName = 'Highlighted';

export const ImgLink = styled(Link)`
  text-align: center;
`;
ImgLink.displayName = 'ImgLink';

export const MainImage = styled.img`
  border-radius: 4px;
  width: 90%;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
`;
MainImage.displayName = 'MainImage';

export const ModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  max-width: 70%;
`;
ModuleWrapper.displayName = 'ModuleWrapper';

export const Title = styled(BaseTitle)`
  margin: 20px auto;
  font-size: ${sizeXXLarge};
  color: ${({ colors }) => colors && colors.secondary};
`;
Title.displayName = 'Title';
