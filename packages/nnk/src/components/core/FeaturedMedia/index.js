import React, { useState, useEffect } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'frontity';
import { number } from 'prop-types';
import { StatePropType } from '../../../types';
import { Container, StyledImage } from './styles';
import { fetchData } from '../../../utils';

const MEDIA_PATH = 'http://www.nonamekitchen.org/wp-json/wp/v2/media';

const FeaturedMedia = ({ state, id }) => {
  const [media, updateMedia] = useState(state.source.attachment[id]);

  const srcset =
    (media &&
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
        )) ||
    null;

  useEffect(() => {
    if (!media && id !== 0) {
      fetchData(`${MEDIA_PATH}/${id}`).then(response => {
        if (response.post) {
          updateMedia(response);
        } else {
          updateMedia('not_found');
        }
      });
    }
  }, [media]);

  return (
    <>
      {media && media !== 'not_found' && (
        <Container>
          <StyledImage
            alt={media.title.rendered}
            src={media.source_url}
            srcSet={srcset}
          />
        </Container>
      )}
    </>
  );
};

FeaturedMedia.propTypes = {
  state: StatePropType.isRequired,
  id: number.isRequired
};

export default connect(FeaturedMedia);
