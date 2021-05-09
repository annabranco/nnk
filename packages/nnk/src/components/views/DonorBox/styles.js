import { styled, css } from 'frontity';
import { BaseTitle, sizeLargeTitle } from '../../../setup/themes';

export const DonorBoxArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
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
    width: 120%;
  }
`;
DonorBoxFrame.displayName = 'DonorBoxFrame';

export const Title = styled(BaseTitle)`
  margin-bottom: 20px;
  font-size: ${sizeLargeTitle};
  color: ${({ colors }) => colors && colors.primary};
  text-align: center;
`;
Title.displayName = 'Title';
