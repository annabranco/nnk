/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import { fetchData } from '../../../utils';
import { ColorsPropType, ItemPropType } from '../../../types';
import { Report, ReportImage, ReportLink, ReportTitle } from './styles';

const MEDIA_PATH = 'https://www.borderviolence.eu/wp-json/wp/v2/media';

const ReportItem = ({ colors, report }) => {
  const [featMedia, setFeatMedia] = useState();

  useEffect(() => {
    try {
      fetchData(`${MEDIA_PATH}/${report.featured_media}`).then(resp => {
        setFeatMedia(resp);
      });
    } catch (error) {
      console.error(
        `Failed to get featured media from ${report.slug}. ${error}.`
      );
    }
  }, [report]);

  // const transformLink = link => link.split('https://www.borderviolence.eu')[1];

  return (
    <>
      {report && (
        <ReportLink href={report.link} rel="noreferrer" target="_blank">
          <Report colors={colors}>
            <ReportTitle
              colors={colors}
              dangerouslySetInnerHTML={{ __html: report.title.rendered }}
            />
            {featMedia && (
              <ReportImage
                alt={featMedia.title.rendered}
                src={featMedia.source_url}
              />
            )}
          </Report>
        </ReportLink>
      )}
    </>
  );
};

ReportItem.propTypes = {
  colors: ColorsPropType.isRequired,
  report: ItemPropType.isRequired
};

export default connect(ReportItem);
