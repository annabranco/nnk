import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { connect } from 'frontity';
import { Report, ReportImage, ReportText, ReportTitle } from './styles';
import { ColorsPropType, StatePropType } from '../../../types';
import { fetchData } from '../../../utils';

const ReportItem = ({ state, url }) => {
  const [report, setReport] = useState();
  const { colors } = state.theme;

  useEffect(() => {
    fetchData(url)
      .then(resp => {
        console.log('$$$ resp', resp);
        setReport(resp[0]);
      })
      .catch(error =>
        console.error(`Failed to get report from ${URL}. ${error}.`)
      );
  }, [url]);

  return (
    <>
      {report && (
        <Report>
          <ReportTitle
            dangerouslySetInnerHTML={{ __html: report.title.rendered }}
          />
          <ReportImage
            src={state.source.attachment[report.featured_media].source_url}
            alt={state.source.attachment[report.featured_media].title.rendered}
          />
        </Report>
      )}
    </>
  );
};

ReportItem.propTypes = {
  colors: ColorsPropType.isRequired,
  state: StatePropType.isRequired,
  url: string.isRequired
};

export default connect(ReportItem);
