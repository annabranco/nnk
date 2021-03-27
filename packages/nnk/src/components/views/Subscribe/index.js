// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ColorsPropType } from '../../../types';
import { SubscribeContainer } from './styles';

const SubscriptionArea = ({ colors }) => (
  <SubscribeContainer colors={colors}>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfDAwap34je_R2Kt-H3QvK6tLAxRB3TMNGFmmo3_Yn5Xd3IPg/viewform?embedded=true"
      width="640"
      height="800"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="subscription"
    >
      Loading…
    </iframe>
  </SubscribeContainer>
);

SubscriptionArea.propTypes = {
  colors: ColorsPropType.isRequired
};

export default SubscriptionArea;
