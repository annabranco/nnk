/* eslint-disable import/no-extraneous-dependencies */
import { string } from 'prop-types';
import React, { useRef, useState } from 'react';
import { ColorsPropType } from '../../../types';
import { Loading } from '../../../assets/images';
import { LoadingSpinner, SubscribeContainer, SubscribeFrame } from './styles';

const SubscriptionArea = ({ colors, size }) => {
  const [pageLoaded, toggleLoaded] = useState(false);
  const FrameElement = useRef();

  const setAttributes = attrs => {
    Object.entries(attrs).forEach(([key, value]) => {
      FrameElement.current.setAttribute(key, value);
    });
  };

  const onLoad = () => {
    toggleLoaded(true);
    setAttributes({
      width: size === 'small' ? 340 : 640,
      height: 800,
      frameborder: 0,
      marginheight: 0,
      marginwidth: 0
    });
  };

  return (
    <SubscribeContainer colors={colors}>
      {!pageLoaded && (
        <LoadingSpinner src={`${Loading}?${Math.random()}`} alt="Loading" />
      )}
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
  colors: ColorsPropType.isRequired,
  size: string
};

SubscriptionArea.defaultProps = {
  size: 'large'
};

export default SubscriptionArea;
