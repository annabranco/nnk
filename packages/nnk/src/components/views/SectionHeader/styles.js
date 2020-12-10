import { styled } from 'frontity';
import { BaseTitle, sizeHugeTitle } from '../../../setup/themes';

export const Title = styled(BaseTitle)`
  font-size: ${sizeHugeTitle};
  color: ${({ colors }) => colors && colors.secondary};
  width: fit-content;
`;
Title.displayName = 'Title';

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  background: ${({ colors }) => colors && colors.primary};
  padding: 10px 20px 0px;
`;
TitleWrapper.displayName = 'TitleWrapper';
