import { styled } from 'frontity';
import {
  BaseTitle,
  sizeHugeTitle,
  sizeXLargeTitle
} from '../../../setup/themes';

export const Title = styled(BaseTitle)`
  font-size: ${sizeXLargeTitle};
  color: ${({ colors }) => colors && colors.secondary};
  width: fit-content;

  /* @media only screen and (min-width: 375px) {
    font-size: ${sizeHugeTitle};
  } */

  @media all and (min-width: 768px) {
    font-size: ${sizeHugeTitle};
  }
`;
Title.displayName = 'Title';

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  right: unset;
  left: 0;
  min-width: 120px;
  background: ${({ colors }) => colors && colors.primary};
  padding: 10px 20px 0px;

  /* @media only screen and (min-height: 400px) {
    left: unset;
    right: 0;
  } */

  @media only screen and (min-width: 375px) {
    left: 0;
    bottom: 5%;
  }

  @media only screen and (min-width: 768px) {
    right: unset;
    left: 0;
  }
`;
TitleWrapper.displayName = 'TitleWrapper';
