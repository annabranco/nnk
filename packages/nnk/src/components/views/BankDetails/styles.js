import { styled } from 'frontity';
import { fontTitle, sizeLarge, sizeMedium } from '../../../setup/themes';

export const BankDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ colors }) => colors && colors.secondary};
  /* height: 55px;
  padding: 0;
  padding-top: 20px;

  @media all and (min-width: 768px) {
    padding: 80px 100px 30px;
  } */
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
  margin: 20px 0;
  color: gray;
  text-transform: uppercase;
  font-family: ${fontTitle};
  font-size: ${sizeLarge};
  letter-spacing: 1px;

  & span {
    font-weight: 700;
    color: ${({ colors }) => colors && colors.primary};
  }
`;
BankDetailsWrapper.displayName = 'BankDetailsWrapper';
