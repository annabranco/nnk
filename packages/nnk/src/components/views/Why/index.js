// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import config from '../../../setup/config';
import { fetchData, getSocialLinks } from '../../../utils';
import { WHY_TEXTS } from '../../../db';
import ReportItem from '../ReportItem';
import SectionHeader from '../SectionHeader';
import { HeroWhy } from '../../../assets/images';
import { StatePropType } from '../../../types';
import Link from '../../core/Link';
import {
  BorderViolenceArea,
  Content,
  Intro,
  LatestReportsArea,
  ReportLink,
  Section,
  SubTitle,
  TestimonialArea,
  Title
} from './styles';
import Carroussel from '../Carroussel';

const BORDER_VIOLENCE_URL = 'https://www.borderviolence.eu';
const MONTHLY_REPORTS_URL = `${BORDER_VIOLENCE_URL}/wp-json/wp/v2/posts?categories=28`;

const WhySection = ({ state }) => {
  const { colors, language } = state.theme;
  const [latestReports, setLatestReports] = useState([]);
  let texts = WHY_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  const getLatestMonthlyReports = () => {
    // const categories = state.source.category;
    if (latestReports.length === 0) {
      fetchData(MONTHLY_REPORTS_URL)
        .then(resp => {
          const reports = resp;
          if (reports.length > 0) {
            reports.sort().splice(config.latestReportsNum);
            setLatestReports(reports);
          }
        })
        .catch(error =>
          console.error(`Failed to get report from ${URL}. ${error}.`)
        );
    }
  };

  useEffect(() => {
    texts = WHY_TEXTS[language];
  }, [language]);

  useEffect(() => {
    getLatestMonthlyReports();
  }, [state]);

  console.log('$$$ latestReports', latestReports);

  return (
    <Section colors={colors}>
      <SectionHeader
        colors={colors}
        img={HeroWhy}
        position="0 70%"
        socialLinks={socialLinks}
        title={texts.title}
      />
      <Content>
        <Intro>{texts.fullInto}</Intro>
        <SubTitle colors={colors}>{texts.programsTitle}</SubTitle>
        <TestimonialArea colors={colors}>
          <Carroussel items={texts.testimonials} />
        </TestimonialArea>
        <BorderViolenceArea>
          <Link link={`${BORDER_VIOLENCE_URL}/category/monthly-report/`}>
            <Title colors={colors}>{texts.borderViolence}</Title>
          </Link>
          {latestReports.length > 0 && (
            <>
              <LatestReportsArea items={config.latestReportsNum}>
                {latestReports.map(report => (
                  <ReportItem
                    colors={colors}
                    key={report.id}
                    rel="noreferrer"
                    report={report}
                    target="_blank"
                  />
                ))}
              </LatestReportsArea>
              <ReportLink
                colors={colors}
                href={`${BORDER_VIOLENCE_URL}/category/monthly-report/`}
              >
                {texts.moreReports}
              </ReportLink>
            </>
          )}
        </BorderViolenceArea>
        {/* <RecentArea>
          <Title colors={colors}>{texts.recentTestimonials}</Title>
        </RecentArea> */}
      </Content>
    </Section>
  );
};

WhySection.propTypes = {
  state: StatePropType.isRequired
};

export default connect(WhySection);
