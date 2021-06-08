/* eslint-disable import/no-extraneous-dependencies */
import { number, string } from 'prop-types';
import React, { useRef, useState } from 'react';
import { ColorsPropType } from '../../../types';
import { Loading } from '../../../assets/images';
import { LoadingSpinner, SubscribeContainer, SubscribeFrame } from './styles';

const ExternalForm = ({ colors, height, src, title, width }) => {
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
      frameborder: 0,
      height,
      marginheight: 0,
      marginwidth: 0,
      width
    });
  };

  return (
    <SubscribeContainer colors={colors}>
      {!pageLoaded && (
        <LoadingSpinner src={`${Loading}?${Math.random()}`} alt="Loading" />
      )}
      <SubscribeFrame
        frameBorder="0"
        onLoad={onLoad}
        ref={FrameElement}
        src={src}
        title={title}
      >
        Loading…
      </SubscribeFrame>
    </SubscribeContainer>
  );
};

ExternalForm.propTypes = {
  colors: ColorsPropType.isRequired,
  height: number.isRequired,
  src: string.isRequired,
  title: string.isRequired,
  width: number.isRequired
};

export default ExternalForm;
