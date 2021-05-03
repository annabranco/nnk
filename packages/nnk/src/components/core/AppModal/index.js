/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { node, func, bool } from 'prop-types';
import { connect } from 'frontity';
import { ACTIONS_TEXTS } from '../../../db';
import { CloseButton, ModalOverlay } from './styles';
import { StatePropType } from '../../../types';

const AppModal = ({ children, closeButton, closeAction, state }) => {
  const { colors, language } = state.theme;
  return (
    <ModalOverlay onClick={closeAction}>
      {closeAction && closeButton && (
        <CloseButton
          colors={colors}
          text={ACTIONS_TEXTS[language].close}
          onClick={closeAction}
        />
      )}
      {children}
    </ModalOverlay>
  );
};

AppModal.propTypes = {
  children: node,
  closeAction: func,
  closeButton: bool,
  state: StatePropType.isRequired
};

AppModal.defaultProps = {
  children: undefined,
  closeAction: null,
  closeButton: false
};

export default connect(AppModal);
