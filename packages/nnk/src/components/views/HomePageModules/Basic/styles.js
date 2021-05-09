import { css, styled } from 'frontity';
import {
  BaseText,
  BaseTitle,
  sizeMediumTitle,
  sizeSmallTitle,
  sizeXLarge
} from '../../../../setup/themes';

export const BasicModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow-y: hidden;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 60px;
  padding: 20px 0 40px;
  max-width: 80%;

  ${({ colors }) =>
    colors &&
    css`
      border-bottom: 2px solid ${colors.terciary};
    `}

  @media only screen and (min-width: 768px) {
    margin: 20px 0 40px;
    border: 0;
  }

  @media only screen and (min-width: 1024px) {
    margin: 20px 0;
    max-width: 60%;
    padding: 20px 0;
    border: 0;
  }
`;

export const Image = styled.img`
  border-radius: 4px;
  margin-bottom: 30px;
  height: 190px;
  width: 300px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.7);

  @media only screen and (min-width: 375px) {
    height: 220px;
    width: 350px;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 10px 10px;
    height: 150px;
    width: 230px;
  }

  @media only screen and (min-width: 1024px) {
    margin: 0 10px 10px;
    height: 190px;
    width: 300px;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    margin: 0 10px 10px;
    height: 300px;
    width: 500px;
  }
`;

export const ImageTitle = styled(BaseTitle)`
  margin-bottom: 10px;
  font-size: ${sizeXLarge};
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
ImageTitle.displayName = 'ImageTitle';

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
ImagesWrapper.displayName = 'ImagesWrapper';

export const Text = styled(BaseText)`
  font-size: ${sizeSmallTitle};
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;

  @media only screen and (min-width: 1200px) {
    white-space: pre;
  }
`;
Text.displayName = 'Text';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  padding: 20px 0;
  border-top: 6px solid ${({ colors }) => colors && colors.terciary};
  border-radius: 2px;
  padding-top: 30px;

  @media only screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 0;
    white-space: pre;
  }
`;
TextWrapper.displayName = 'TextWrapper';
