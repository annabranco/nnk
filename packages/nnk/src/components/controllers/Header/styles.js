import { styled } from 'frontity';
import config from '../../../setup/config';

export const HeaderContainer = styled.header`
  /* position: fixed; */
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: line;
  align-items: flex-end;
  justify-content: space-around;
  z-index: 100;
  height: 100px;
  background-color: ${({ colors }) => colors.primary};
  padding: 0 ${config.headerPadding};
`;

export const Logo = styled.img`
  width: 100px;
`;

export const LanguageFlag = styled.img`
  width: 30px;
  margin-bottom: 30px;
  cursor: pointer;
`;
