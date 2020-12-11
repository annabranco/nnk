import { styled } from 'frontity';
import {
  BaseText,
  BaseTitle,
  sizeSmallTitle,
  sizeMedium,
  sizeXLargeTitle,
  sizeXXLargeTitle
} from '../../../setup/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: calc(100vh - 155px);
  padding: 24px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 800px;
  }
`;
Container.displayName = 'Container';

export const Title = styled(BaseTitle)`
  margin: 0 auto 20px;
  font-size: ${sizeXLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};

  @media only screen and (min-width: 375px) {
    font-size: ${sizeXXLargeTitle};
  }

  @media only screen and (min-width: 1024px) {
    font-size: ${sizeXLargeTitle};
  }
`;
Title.displayName = 'Title';

export const Description = styled.div`
  margin: 24px 0;
  line-height: 1.6em;
`;
Description.displayName = 'Description';

export const Text = styled(BaseText)`
  color: ${({ colors }) => colors && colors.secondary};
  font-size: ${sizeSmallTitle};

  @media only screen and (min-width: 1024px) {
    white-space: pre;
    font-size: ${sizeMedium};
  }
`;
Text.displayName = 'Text';
