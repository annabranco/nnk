import { styled } from 'frontity';
import { BaseText, BaseTitle, sizeXLargeTitle } from '../../../setup/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: calc(100vh - 155px);
  width: 800px;
  padding: 24px;
  text-align: center;
`;

export const Title = styled(BaseTitle)`
  margin: 0 auto 20px;
  font-size: ${sizeXLargeTitle};
  color: ${({ colors }) => colors && colors.terciary};
`;

export const Description = styled.div`
  margin: 24px 0;
  line-height: 1.6em;
`;

export const Text = styled(BaseText)`
  color: ${({ colors }) => colors && colors.secondary};
  white-space: pre;
`;
