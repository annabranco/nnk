// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect } from 'react';
import { connect } from 'frontity';
import Link from '../Link';
import { ActionsPropType, StatePropType } from '../../../types';
import { PageButton, PageButtonArrow, ButtonsWrapper } from './styles';

const Pagination = ({ state, actions }) => {
  const { colors } = state.theme;
  const { next, previous } = state.source.get(state.router.link);

  useEffect(() => {
    if (next) {
      actions.source.fetch(next);
    }
  }, []);

  return (
    <ButtonsWrapper>
      {previous && (
        <Link link={previous}>
          <PageButton colors={colors}>
            <PageButtonArrow
              aria-hidden
              className="fas fa-chevron-circle-left"
            />
            Newer posts
          </PageButton>
        </Link>
      )}
      {next && (
        <Link link={next}>
          <PageButton alone={!previous} colors={colors} right>
            Older posts
            <PageButtonArrow
              aria-hidden
              className="fas fa-chevron-circle-right"
              right
            />
          </PageButton>
        </Link>
      )}
    </ButtonsWrapper>
  );
};

Pagination.propTypes = {
  actions: ActionsPropType,
  state: StatePropType
};

Pagination.defaultProps = {
  actions: null,
  state: null
};

export default connect(Pagination);
