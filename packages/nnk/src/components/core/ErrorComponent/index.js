import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { Container, Description } from './styles';
import { Title } from '../../views/NavItem/styles';
import { StatePropType } from '../../../types';

const description404 = (
  <>
    That page can’t be found{' '}
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://community.frontity.org"> let us know </a> or try refreshing
    your browser.
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);
  const { colors } = state.theme;

  const title = 'Oops! Something went wrong';
  const title404 = 'Oops! 404';

  return (
    <Container>
      <Title colors={colors}>{data.is404 ? title404 : title}</Title>
      <Description colors={colors}>
        {data.is404 ? description404 : description}
      </Description>
    </Container>
  );
};

Page404.propTypes = {
  state: StatePropType.isRequired
};

export default connect(Page404);
