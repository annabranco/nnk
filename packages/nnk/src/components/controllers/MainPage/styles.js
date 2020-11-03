import { styled } from 'frontity';

export const MainContainer = styled.div`
  background-color: ${({ colors }) => colors && colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
