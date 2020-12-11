import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import SectionHeader from '../SectionHeader';
import { getSocialLinks } from '../../../utils';
import { WHY_TEXTS } from '../../../db';
import { Photo07, Program03 } from '../../../assets/images';
import {
  BorderViolenceArea,
  Content,
  Intro,
  Photo,
  RecentArea,
  Section,
  SubTitle,
  TestimonialArea,
  Title,
  TextTestimonial,
  TextVictim,
  LatestReportsArea,
  ReportLink
} from './styles';
import { StatePropType } from '../../../types';
import config from '../../../setup/config';
import ReportItem from '../ReportItem';
import Link from '../../core/Link';

const WhySection = ({ state }) => {
  const { colors, language } = state.theme;
  const [latestReports, setLatestReports] = useState([]);
  let texts = WHY_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  const getLatestMonthlyReports = () => {
    const categories = state.source.category;

    if (Object.keys(categories).length > 0) {
      const reports = [];
      const latests = [];
      // eslint-disable-next-line no-unused-vars
      Object.entries(categories).forEach(([id, category]) => {
        if (category.link.includes('monthly-report')) {
          reports.push(category);
        }
      });
      const latestIds = Object.keys(reports).splice(-config.latestReportsNum);

      latestIds.forEach(id => {
        // eslint-disable-next-line no-underscore-dangle
        const URL = reports[id]._links['wp:post_type'][0].href;
        latests.push(URL);
      });
      latests.reverse();
      console.log('$$$ latests', latests);
      setLatestReports(latests);
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
        img={Photo07}
        position="0 80%"
        socialLinks={socialLinks}
        title={texts.title}
      />
      <Content>
        <Intro>{texts.fullInto}</Intro>
        <SubTitle colors={colors}>{texts.programsTitle}</SubTitle>
        <TestimonialArea colors={colors}>
          <Photo img={Program03} />
          <TextTestimonial>{texts.testimonial}</TextTestimonial>
          <TextVictim>{texts.victim}</TextVictim>
        </TestimonialArea>
        <BorderViolenceArea>
          <Link link="/category/monthly-report/">
            <Title colors={colors}>{texts.borderViolence}</Title>
          </Link>
          {latestReports.length > 0 && (
            <>
              <LatestReportsArea>
                {latestReports.map(reportUrl => (
                  <ReportItem key={reportUrl} url={reportUrl} />
                ))}
              </LatestReportsArea>
              <ReportLink colors={colors} link="/category/monthly-report/">
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
