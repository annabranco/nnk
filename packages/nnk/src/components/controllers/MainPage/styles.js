import { styled } from 'frontity';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ colors }) => colors && colors.primary};
  width: 100%;
`;
MainContainer.displayName = 'MainContainer';
