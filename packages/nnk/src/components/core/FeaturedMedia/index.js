import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { number } from 'prop-types';
import { Container, StyledImage } from './styles';
import { StatePropType } from '../../../types';

const FeaturedMedia = ({ state, id }) => {
  const media = state.source.attachment[id];

  console.log('$$$ id', id);
  if (!media) {
    return null;
  }

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map(item => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(' ')}w${index !== array.length - 1 ? ', ' : ''}`
          ),
        ''
      ) || null;

  return (
    <Container>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </Container>
  );
};

FeaturedMedia.propTypes = {
  state: StatePropType.isRequired,
  id: number.isRequired
};

export default connect(FeaturedMedia);
