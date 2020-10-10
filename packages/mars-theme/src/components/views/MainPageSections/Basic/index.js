import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { styled } from 'frontity';
import MainMockImage from '../../../../assets/images/mocks/mainPageMock01.jpg';

const BasicSection = () => <MockImage src={MainMockImage} />;

export default BasicSection;

const MockImage = styled.img`
  margin-top: 20px;
`;
