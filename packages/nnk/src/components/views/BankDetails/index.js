import React, { useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { string } from 'prop-types';
import { DONATION_TEXTS } from '../../../db';
import { BankHeader, PaypalInfo } from '../../../assets/images';
import config from '../../../setup/config';
import { ColorsPropType } from '../../../types';
import {
  BankDetailsWrapper,
  BankInfoWrapper,
  BankInfoItem,
  BankDetailsImages
} from './styles';

const BankDetails = ({ colors, language }) => {
  let texts = DONATION_TEXTS[language];

  useEffect(() => {
    texts = DONATION_TEXTS[language];
  }, [language]);

  return (
    <BankDetailsWrapper colors={colors} onClick={e => e.stopPropagation()}>
      <BankDetailsImages src={BankHeader} alt="" />
      <BankInfoWrapper>
        <BankInfoItem colors={colors}>
          {texts.bankInfo.orgName}: <span>{config.account.name}</span>
        </BankInfoItem>
        <BankInfoItem colors={colors}>
          {texts.bankInfo.orgAddress}: <span>{config.account.address}</span>
        </BankInfoItem>
        <BankInfoItem colors={colors}>
          {texts.bankInfo.bankName}: <span>{config.account.bank}</span>
        </BankInfoItem>
        <BankInfoItem colors={colors}>
          {texts.bankInfo.accNumber}: <span>{config.account.iban}</span>
        </BankInfoItem>
        <BankInfoItem colors={colors}>
          {texts.bankInfo.bankAddress}:{' '}
          <span>{config.account.bankAddress}</span>
        </BankInfoItem>
        <BankInfoItem colors={colors}>
          {texts.bankInfo.swift}: <span>{config.account.swift}</span>
        </BankInfoItem>
      </BankInfoWrapper>
      <BankDetailsImages src={PaypalInfo} alt="" />
    </BankDetailsWrapper>
  );
};

BankDetails.propTypes = {
  colors: ColorsPropType.isRequired,
  language: string.isRequired
};

export default BankDetails;
