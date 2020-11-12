import { styled } from 'frontity';
import { BaseTitle, sizeHugeTitle } from '../../../setup/themes';

export const Title = styled(BaseTitle)`
  font-size: ${sizeHugeTitle};
  color: ${({ colors }) => colors && colors.secondary};
  width: fit-content;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  background: ${({ colors }) => colors && colors.primary};
  padding: 10px 20px 0px;
`;
