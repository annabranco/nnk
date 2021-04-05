import { styled } from 'frontity';
import { fontText, sizeMedium } from '../../../setup/themes';

export const Report = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 30px;
  width: auto;
  &:hover {
    & > h3 {
      color: ${({ colors }) => colors && colors.terciary};
    }
    & > div {
      border: 1px solid red;
      box-shadow: 0 0 5px 0 red;
    }
  }
`;
Report.displayName = 'ReportTitle';

export const ReportLink = styled.a`
  text-decoration: none;
`;
ReportLink.displayName = 'ReportLink';

export const ReportTitle = styled.h3`
  margin-bottom: 20px;
  font-size: ${sizeMedium};
  color: ${({ colors }) => colors && colors.secondary};
  font-family: ${fontText};
  font-weight: 700;
`;
ReportTitle.displayName = 'ReportTitle';

export const ReportImage = styled.div`
  min-height: 260px;
  min-width: 160px;
  width: 100%;
  border: 1px solid white;
  border-radius: 5px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: 10% bottom;
  background-size: cover;
  background-repeat: no-repeat;
`;
ReportImage.displayName = 'ReportImage';
