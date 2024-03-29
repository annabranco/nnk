import { styled } from 'frontity';

export const NewsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: ${({ colors }) => colors && colors.secondary};

  @media all and (min-width: 768px) {
    padding: 0 80px;
  }

  @media all and (min-width: 1200px) {
    padding: 0 150px;
  }
`;
NewsSection.displayName = 'NewsSection';

export const NewsWrapper = styled.div`
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0;
  padding: 12px;
  list-style: none;
  background: ${({ colors }) => colors && colors.secondary};

  @media all and (min-width: 768px) {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(3, 1fr);
    padding: 24px;
    grid-gap: 10px;
  }
`;
NewsWrapper.displayName = 'NewsWrapper';
