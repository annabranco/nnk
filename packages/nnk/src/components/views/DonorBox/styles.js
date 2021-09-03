import { styled } from 'frontity';
import { BaseTitle, sizeLargeTitle } from '../../../setup/themes';

export const DonorBoxArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 768px) {
    margin-left: -20%;
  }

  @media all and (min-width: 1200px) {
    margin-left: inherit;
  }
`;
DonorBoxArea.displayName = 'DonorBoxArea';

export const DonorBoxFrame = styled.iframe`
  height: 900px;
  min-width: 250px;
  width: 100%;
  max-height: none;
  margin: 0 auto;

  @media all and (min-width: 768px) {
    height: 900px;
    min-width: 250px;
    width: 180%;
  }

  @media all and (min-width: 1200px) {
    height: 600px;
    min-width: 250px;
    width: 140%;
  }

  @media all and (min-width: 1600px) {
    height: 700px;
    min-width: 250px;
    width: 160%;
  }

  @media all and (min-width: 2500px) {
    height: 1800px;
    min-width: 250px;
    width: 220%;
  }
`;
DonorBoxFrame.displayName = 'DonorBoxFrame';

export const Title = styled(BaseTitle)`
  margin-bottom: 20px;
  font-size: ${sizeLargeTitle};
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;
`;
Title.displayName = 'Title';
