// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useRef } from 'react';
import { ColorsPropType } from '../../../types';
import { SubscribeContainer, SubscribeFrame } from './styles';

const SubscriptionArea = ({ colors }) => {
  const FrameElement = useRef();

  const setAttributes = attrs => {
    Object.entries(attrs).forEach(([key, value]) => {
      FrameElement.current.setAttribute(key, value);
    });
  };

  const onLoad = () => {
    setAttributes({
      width: 640,
      height: 800,
      frameborder: 0,
      marginheight: 0,
      marginwidth: 0
    });
  };

  return (
    <SubscribeContainer colors={colors}>
      <SubscribeFrame
        src="https://docs.google.com/forms/d/e/1FAIpQLSfDAwap34je_R2Kt-H3QvK6tLAxRB3TMNGFmmo3_Yn5Xd3IPg/viewform?embedded=true"
        frameBorder="0"
        title="subscription"
        ref={FrameElement}
        onLoad={onLoad}
      >
        Loading…
      </SubscribeFrame>
    </SubscribeContainer>
  );
};

SubscriptionArea.propTypes = {
  colors: ColorsPropType.isRequired
};

export default SubscriptionArea;
