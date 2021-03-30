import { styled } from 'frontity';
import { fontTitle, sizeLarge } from '../../../setup/themes';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ colors }) => colors && colors.primary};
  width: 100%;
  overflow-y: hidden;
`;
MainContainer.displayName = 'MainContainer';

export const SubscriptionButton = styled.button`
  margin: -20px auto 10px;
  height: 40px;
  width: 250px;
  color: ${({ colors }) => colors && colors.secondary};
  background-color: ${({ colors }) => colors && colors.terciary};
  text-transform: uppercase;
  font-size: ${sizeLarge};
  font-family: ${fontTitle};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    filter: brightness(1.3);
  }
`;
SubscriptionButton.displayName = 'SubscriptionButton';
