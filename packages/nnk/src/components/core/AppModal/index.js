/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { node, string } from 'prop-types';
import { ModalOverlay } from './styles';

const AppModal = ({ children }) => {
  const [a, b] = useState();

  return <ModalOverlay>{children}</ModalOverlay>;
};

AppModal.propTypes = {
  children: node
};

AppModal.defaultProps = {
  children: undefined
};

export default AppModal;
