import { styled } from 'frontity';
import config from '../../../setup/config';

export const MainArea = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${({ colors }) => colors.primary};
  /* min-height: calc(100vh - 80px - 76px); Header & Footer */
  min-height: calc(100vh - 160px); /* Header & Footer */
  width: 100%;
  padding: 0 ${config.mainPadding};
`;
MainArea.displayName = 'MainArea';
