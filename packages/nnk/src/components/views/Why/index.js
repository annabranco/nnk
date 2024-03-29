// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import config from '../../../setup/config';
import { fetchData, getSocialLinks } from '../../../utils';
import { WHY_TEXTS } from '../../../db';
import ReportItem from '../ReportItem';
import SectionHeader from '../SectionHeader';
import {
  BlackBook,
  HeroWhyBig,
  HeroWhyMedium,
  HeroWhySmall
} from '../../../assets/images';
import { StatePropType } from '../../../types';
import Link from '../../core/Link';
import Carroussel from '../Carroussel';
import {
  BlackBookContainer,
  BlackBookPhoto,
  BlackBookVolumesWrapper,
  BorderViolenceArea,
  Content,
  Intro,
  BlackBookIntro,
  LatestReportsArea,
  ReportLink,
  Section,
  SubTitle,
  TestimonialArea,
  Title,
  BlackBookTitle
} from './styles';

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

  const insertHyperlinkOnTexts = text => {
    const updatedText = text
      .replace(
        'devoluciones violentas',
        '<a href="https://www.youtube.com/watch?v=eC-LQaOw6OM" rel="noreferrer" target="_blank" noreferrer>devoluciones violentas</a>'
      )
      .replace(
        'violent pushbacks',
        '<a href="https://www.youtube.com/watch?v=eC-LQaOw6OM" rel="noreferrer" target="_blank" noreferrer>violent pushbacks</a>'
      )
      .replace(
        'Black Book of Pushbacks',
        '<a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:3f809f15-bada-4d3f-adab-f14d9489275a#pageNum=1" rel="noreferrer" target="_blank" noreferrer>Black Book of Pushbacks</a>'
      )
      .replace(
        'Libro Negro de las Devoluciones',
        '<span>Libro Negro de las Devoluciones</span>'
      )
      .replace(
        'Border Violence Monitoring Network',
        '<a href="ttps://www.borderviolence.eu/" rel="noreferrer" target="_blank" noreferrer>Border Violence Monitoring Network</a>'
      )
      .replace(
        'BVMN',
        '<a href="ttps://www.borderviolence.eu/" rel="noreferrer" target="_blank" noreferrer>BVMN</a>'
      );
    return updatedText;
  };

  useEffect(() => {
    texts = WHY_TEXTS[language];
  }, [language]);

  useEffect(() => {
    getLatestMonthlyReports();
  }, [state]);

  return (
    <Section colors={colors}>
      <SectionHeader
        colors={colors}
        imgs={[HeroWhySmall, HeroWhyMedium, HeroWhyBig]}
        position="0 50%"
        socialLinks={socialLinks}
        title={texts.title}
      />
      <Content>
        <Intro
          colors={colors}
          dangerouslySetInnerHTML={{
            __html: insertHyperlinkOnTexts(texts.fullInto)
          }}
        />
        <SubTitle colors={colors}>{texts.programsTitle}</SubTitle>
        <TestimonialArea colors={colors}>
          <Carroussel items={texts.testimonials} />
        </TestimonialArea>
        <BorderViolenceArea>
          <Title colors={colors}>{texts.fightingInjustice}</Title>

          <Intro
            colors={colors}
            dangerouslySetInnerHTML={{
              __html: insertHyperlinkOnTexts(texts.borderViolenceIntro)
            }}
          />
          <BlackBookContainer colors={colors}>
            <BlackBookTitle colors={colors}>
              {texts.blackBookName}
            </BlackBookTitle>

            <BlackBookPhoto src={BlackBook} alt="The Black Book cover" />
            <BlackBookIntro
              colors={colors}
              dangerouslySetInnerHTML={{
                __html: insertHyperlinkOnTexts(texts.blackBook)
              }}
            />
            <BlackBookVolumesWrapper>
              <Link
                link="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:b10a04a4-25dd-45f1-8b2d-e9c25946cb44#pageNum=1"
                rel="noreferrer"
                target="_blank"
              >
                <BlackBookIntro colors={colors} volumes>
                  {texts.blackBookVolumes[0]}
                </BlackBookIntro>
              </Link>
              <Link
                link="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Ab10a04a4-25dd-45f1-8b2d-e9c25946cb44#pageNum=1"
                rel="noreferrer"
                target="_blank"
              >
                <BlackBookIntro colors={colors} volumes>
                  {texts.blackBookVolumes[1]}
                </BlackBookIntro>
              </Link>
            </BlackBookVolumesWrapper>
          </BlackBookContainer>

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
  state: StatePropType
};

WhySection.defaultProps = {
  state: null
};

export default connect(WhySection);
