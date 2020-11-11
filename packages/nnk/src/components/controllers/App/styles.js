import { styled } from 'frontity';
import config from '../../../setup/config';

export const MainArea = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${({ colors }) => colors.primary};
  padding: 0 ${config.mainPadding};
  width: 100%;
`;
