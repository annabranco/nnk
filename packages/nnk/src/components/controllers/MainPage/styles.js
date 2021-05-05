import { styled } from 'frontity';
import { fontTitle, sizeMediumTitle } from '../../../setup/themes';

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
  margin: -30px auto 30px;
  height: 60px;
  width: 90vw;
  color: ${({ colors }) => colors && colors.secondary};
  background-color: ${({ colors }) => colors && colors.terciary};
  text-transform: uppercase;
  font-size: ${sizeMediumTitle};
  font-family: ${fontTitle};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    filter: brightness(1.3);
  }

  @media all and (min-width: 768px) {
    height: 60px;
    width: 550px;
  }
`;
SubscriptionButton.displayName = 'SubscriptionButton';
