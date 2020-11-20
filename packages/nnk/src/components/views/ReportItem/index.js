import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { connect } from 'frontity';
import { Report, ReportImage, ReportTitle } from './styles';
import { StatePropType } from '../../../types';
import { fetchData } from '../../../utils';
import Link from '../../core/Link';

const ReportItem = ({ state, url }) => {
  const [report, setReport] = useState();

  useEffect(() => {
    fetchData(url)
      .then(resp => {
        setReport(resp[0]);
      })
      .catch(error =>
        console.error(`Failed to get report from ${URL}. ${error}.`)
      );
  }, [url]);

  const transformLink = link => link.split('https://www.borderviolence.eu')[1];

  return (
    <>
      {report && (
        <Link link={transformLink(report.link)}>
          <Report>
            <ReportTitle
              dangerouslySetInnerHTML={{ __html: report.title.rendered }}
            />
            <ReportImage
              src={state.source.attachment[report.featured_media].source_url}
              alt={
                state.source.attachment[report.featured_media].title.rendered
              }
            />
          </Report>
        </Link>
      )}
    </>
  );
};

ReportItem.propTypes = {
  state: StatePropType.isRequired,
  url: string.isRequired
};

export default connect(ReportItem);
