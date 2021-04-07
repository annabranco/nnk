// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect } from 'react';
import { connect } from 'frontity';
import Link from '../Link';
import { ActionsPropType, StatePropType } from '../../../types';
import { PageButton, PageButtonArrow, ButtonsWrapper } from './styles';

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
  const { colors } = state.theme;
  // Get the total posts to be displayed based for the current link
  const { next, previous } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
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
            <PageButtonArrow className="fas fa-chevron-circle-left" />
            Newer posts
          </PageButton>
        </Link>
      )}
      {next && (
        <Link link={next}>
          <PageButton alone={!previous} colors={colors} right>
            Older posts
            <PageButtonArrow className="fas fa-chevron-circle-right" right />
          </PageButton>
        </Link>
      )}
    </ButtonsWrapper>
  );
};

Pagination.propTypes = {
  state: StatePropType.isRequired,
  actions: ActionsPropType.isRequired
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);
