/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import config from '../../../setup/config';
import { DonorBoxArea, DonorBoxFrame, Title } from './styles';
import { ColorsPropType } from '../../../types';

const DonorBox = ({ campaign, colors }) => {
  const [selectedCampaign, changeCampaign] = useState({ name: '', id: '' });

  useEffect(() => {
    const { id } = config.campaigns.details[campaign];
    const { name } = config.campaigns.details[campaign];
    changeCampaign({ name, id });
  }, [campaign]);

  return (
    <DonorBoxArea>
      <Title colors={colors}>{selectedCampaign.name}</Title>
      {selectedCampaign.id && (
        <DonorBoxFrame
          allowpaymentrequest=""
          name="donorbox"
          scrolling="no"
          seamless="seamless"
          src={`https://donorbox.org/embed/${selectedCampaign.id}`}
          title="DonorBox"
        />
      )}
    </DonorBoxArea>
  );
};

DonorBox.propTypes = {
  campaign: string.isRequired,
  colors: ColorsPropType.isRequired
};

export default DonorBox;
