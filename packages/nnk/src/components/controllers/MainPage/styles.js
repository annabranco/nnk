import { styled } from 'frontity';
import { fontTitle, sizeMediumTitle, sizeXLarge } from '../../../setup/themes';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ colors }) => colors && colors.primary};
  width: 100%;
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
  @media (min-height: 1400px) and (min-width: 2000px) {
    height: 90px;
    width: 800px;
    font-size: ${sizeXLarge};
    border-radius: 30px;
  }
`;
SubscriptionButton.displayName = 'SubscriptionButton';
