import { styled } from 'frontity';
import { fontTitle, sizeLarge, sizeMedium } from '../../../setup/themes';

export const BankDetailsImages = styled.img`
  width: 100%;
  @media all and (min-width: 768px) {
    width: auto;
  }
`;
BankDetailsImages.displayName = 'BankDetailsImages';

export const BankDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0 20px;
  height: 100%;

  @media all and (min-width: 768px) {
    height: auto;
    margin-top: 120px;
  }
`;
BankDetailsWrapper.displayName = 'BankDetailsWrapper';

export const BankInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
BankInfoWrapper.displayName = 'BankInfoWrapper';

export const BankInfoItem = styled.p`
  margin: 10px 0;
  color: gray;
  text-transform: uppercase;
  font-family: ${fontTitle};
  font-size: ${sizeLarge};
  letter-spacing: 1px;

  & span {
    font-weight: 700;
    color: ${({ colors }) => colors && colors.primary};
    display: block;
  }

  @media all and (min-width: 768px) {
    margin: 20px 0;

    & span {
      display: inline;
    }
  }
`;
BankDetailsWrapper.displayName = 'BankDetailsWrapper';
