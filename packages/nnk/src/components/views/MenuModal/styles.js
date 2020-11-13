import { styled } from 'frontity';
import {
  BaseText,
  BaseTitle,
  sizeLargeTitle,
  sizeMediumTitle
} from '../../../setup/themes';

export const BackTitle = styled(BaseText)`
  z-index: 200;
  position: absolute;
  top: 20px;
  left: 20px;
  color: ${({ colors }) => colors.secondary};
`;
BackTitle.displayName = 'BackTitle';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;
Item.displayName = 'Item';

export const LittleSmaller = styled.span`
  font-size: 2.4rem;
`;
LittleSmaller.displayName = 'LittleSmaller';

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: 10;
`;
MenuContent.displayName = 'MenuContent';

export const MenuOverlay = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ colors }) => colors && colors.primary};
  height: 100vh;
  width: 100vw;
  overflow: hidden auto;
  /* opacity: 0.9; */
`;
MenuOverlay.displayName = 'MenuOverlay';

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
ModalWindow.displayName = 'ModalWindow';

export const NavHeader = styled.div`
  z-index: 100;
`;
ModalWindow.displayName = 'ModalWindow';

export const ParentTitle = styled(BaseTitle)`
  z-index: 100;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  font-size: ${sizeMediumTitle};
  color: ${({ colors }) => colors.terciary};
`;
ParentTitle.displayName = 'ParentTitle';

export const Smaller = styled.span`
  font-size: 2rem;
`;
Smaller.displayName = 'Smaller';

export const Title = styled(BaseTitle)`
  margin-bottom: 0;
  font-size: ${sizeLargeTitle};
  color: ${({ colors }) => colors.secondary};
  cursor: pointer;
  transition: color ease 0.3s;
`;
Title.displayName = 'Title';
