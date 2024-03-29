import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { bar, Container } from './styles';

const Loading = () => (
  <Container>
    <div>
      <div css={bar(1)} />
      <div css={bar(2)} />
      <div css={bar(3)} />
      <div css={bar(4)} />
      <div css={bar(5)} />
    </div>
  </Container>
);

export default Loading;
