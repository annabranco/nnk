import { styled } from 'frontity';
import { fontText, sizeMedium } from '../../../setup/themes';

export const Report = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 30px;
  width: auto;
`;
Report.displayName = 'ReportTitle';

export const ReportTitle = styled.h3`
  margin-bottom: 20px;
  font-size: ${sizeMedium};
  color: ${({ colors }) => colors && colors.secondary};
  font-family: ${fontText};
  font-weight: 700; ;
`;
ReportTitle.displayName = 'ReportTitle';

export const ReportImage = styled.img`
  width: 100%;
  border: 1px solid white;
`;
ReportImage.displayName = 'ReportImage';
