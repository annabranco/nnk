import { styled } from 'frontity';

export const Container = styled.div`
  margin: 0;
  height: calc(100vh - 155px);
  width: 800px;
  padding: 24px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 4em;
  color: ${({ colors }) => colors && colors.secondary};
`;

export const Description = styled.div`
  margin: 24px 0;
  line-height: 1.6em;
  color: ${({ colors }) => colors && colors.secondary};
`;
