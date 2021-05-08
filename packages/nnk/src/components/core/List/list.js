// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { connect, decode } from 'frontity';
import Item from './list-item';
import Pagination from './pagination';
import { StatePropType } from '../../../types';
import { Container, Header } from './styles';

const List = ({ state }) => {
  const { colors } = state.theme;
  const data = state.source.get(state.router.link);
  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header colors={colors}>
          {data.taxonomy}:{' '}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}
      {data.isAuthor && (
        <Header colors={colors}>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
    </Container>
  );
};

List.propTypes = {
  state: StatePropType
};

List.defaultProps = {
  state: null
};

export default connect(List);
