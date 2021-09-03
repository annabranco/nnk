/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { node, func, bool } from 'prop-types';
import { connect } from 'frontity';
import { ACTIONS_TEXTS } from '../../../db';
import { StatePropType } from '../../../types';
import { CloseButton, ModalOverlay } from './styles';
import { getDevice } from '../../../utils';
import { DESKTOP } from '../../../constants/devices';

const AppModal = ({ children, closeButton, closeAction, state }) => {
  const { colors, language } = state.theme;
  return (
    <ModalOverlay onClick={closeButton ? () => null : () => closeAction()}>
      {closeAction && closeButton && (
        <CloseButton
          colors={colors}
          onClick={closeAction}
          text={getDevice() === DESKTOP && ACTIONS_TEXTS[language].close}
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
  state: StatePropType
};

AppModal.defaultProps = {
  children: undefined,
  closeAction: null,
  closeButton: false,
  state: null
};

export default connect(AppModal);
