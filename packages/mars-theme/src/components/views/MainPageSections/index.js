import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { styled, css } from 'frontity';
import { string } from 'prop-types';

const PageSection = ({ size, children }) => (
  <SectionContainer size={size}>{children}</SectionContainer>
);

PageSection.propTypes = {
  children: string,
  size: string
};

PageSection.defaultProps = {
  children: undefined,
  size: 'default'
};

export default PageSection;

const SectionContainer = styled.div`
  border-top: 4px solid crimson;
  border-radius: 2px;
  background: black;
  min-height: 50px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  ${({ size }) => {
    let margins = '100px';
    if (size === 'xsmall') {
      margins = '800px';
    }
    if (size === 'small') {
      margins = '600px';
    }
    if (size === 'medium') {
      margins = '400px';
    }
    if (size === 'full') {
      margins = '0px';
    }
    return css`
      margin: 10px ${margins} 0;
      width: calc(100vw - ${margins});
    `;
  }}
`;
