import { styled, keyframes, css } from 'frontity';

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

export const bar = index => css`
  display: inline-block;
  border-radius: 0;
  margin: 3px;
  background-color: rgba(12, 17, 43, 0.3);
  height: 24px;
  width: 4px;
  animation: ${scale} 1s ${index * 0.1}s infinite
    cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
`;
bar.displayName = 'bar';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 800px;
  padding: 24px;

  & > * {
    margin-top: 24px;
  }
`;
Container.displayName = 'Container';
