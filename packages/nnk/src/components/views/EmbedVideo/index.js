/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { string } from 'prop-types';

const EmbedVideo = ({ url }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

EmbedVideo.propTypes = {
  url: string
};

EmbedVideo.defaultProps = {
  url: undefined
};

export default EmbedVideo;
