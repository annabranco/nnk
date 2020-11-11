import { styled } from 'frontity';
import config from '../../../setup/config';

export const HeaderContainer = styled.header`
  z-index: 100;
  display: flex;
  flex-direction: line;
  justify-content: space-around;
  align-items: flex-end;
  background-color: ${({ colors }) => colors.primary};
  height: 100px;
  width: 100%;
  overflow: hidden;
  padding: 0 ${config.headerPadding};
`;

export const Logo = styled.img`
  width: 110px;
  transform: translate(0, 10px);
`;

export const LanguageFlag = styled.img`
  margin-bottom: 30px;
  width: 30px;
  cursor: pointer;
`;
