import { css, styled } from 'frontity';
import {
  BaseTitle,
  sizeLargeTitle,
  sizeXLargeTitle,
  sizeXXLarge
} from '../../../../setup/themes';
import Link from '../../../core/Link';

export const Highlighted = styled.span`
  color: ${({ colors }) => colors && colors.terciary};
`;
Highlighted.displayName = 'Highlighted';

export const ImgLink = styled(Link)`
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
ImgLink.displayName = 'ImgLink';

export const MainImage = styled.img`
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
`;
MainImage.displayName = 'MainImage';

export const MainImageAsBg = styled.div`
  border-radius: 4px;
  height: 300px;
  width: 300px;
  ${({ img }) =>
    css`
      border-radius: 5px;
      background-image: ${`url(${img})`};
      background-position: center center;
      background-size: 150%;
      background-repeat: no-repeat;
    `}

  @media only screen and (min-width: 375px) {
    width: 350px;
  }

  @media only screen and (min-width: 768px) {
    width: 90%;
  }
`;
MainImage.displayName = 'MainImage';

export const ModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  overflow-y: hidden;

  @media only screen and (min-width: 1024px) {
    max-width: 70%;
  }
`;
ModuleWrapper.displayName = 'ModuleWrapper';

export const Title = styled(BaseTitle)`
  margin: 20px auto;
  font-size: ${sizeXXLarge};
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;

  @media only screen and (min-width: 400px) {
    font-size: ${sizeXXLarge};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${sizeXXLarge};
  }
`;
Title.displayName = 'Title';
