import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { styled } from 'frontity';
import MainMockImage from '../../../../assets/images/mocks/mainPageMock02.jpg';

const VolunteerSection = () => <MockImage src={MainMockImage} />;

export default VolunteerSection;

const MockImage = styled.img`
  margin-top: 20px;
`;
