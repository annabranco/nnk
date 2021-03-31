/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { arrayOf } from 'prop-types';
import { Testimony01, Testimony02, Testimony03 } from '../../../assets/images';
import {
  CarrousselWrapper,
  CurrentTestimonial,
  NextTestimonial,
  Photo,
  PreviousTestimonial,
  Text,
  Victim,
  LineMarker,
  Marker
} from './styles';
import { TestimonialPropType } from '../../../types';

const testimonialPhotos = {
  Testimony01: {
    img: Testimony01,
    size: '105%',
    position: '0% 80%'
  },
  Testimony02: {
    img: Testimony02,
    size: '140%',
    position: '100% 35%'
  },
  Testimony03: {
    img: Testimony03,
    size: '190%',
    position: '60% 85%'
  }
};

const Carroussel = ({ items }) => {
  const [updatedItems, updateItems] = useState();

  const sortItems = (newHightlight = 1) => {
    const sortedItems = [];
    const nextIndex = newHightlight === 2 ? 0 : newHightlight + 1;
    const lastIndex = newHightlight === 0 ? 2 : newHightlight - 1;
    sortedItems.push(updatedItems[newHightlight]);
    sortedItems.push(updatedItems[nextIndex]);
    sortedItems.push(updatedItems[lastIndex]);
    updateItems(sortedItems);
  };

  useEffect(() => {
    updateItems(items);
  }, [items]);

  return (
    <>
      {updatedItems && (
        <CarrousselWrapper>
          <PreviousTestimonial>
            <Photo
              img={testimonialPhotos[updatedItems[1].imageId].img}
              size={testimonialPhotos[updatedItems[1].imageId].size}
              position={testimonialPhotos[updatedItems[1].imageId].position}
              small
              onClick={() => sortItems(1)}
            />
            <LineMarker>
              <Marker />
            </LineMarker>
          </PreviousTestimonial>
          <CurrentTestimonial>
            <Photo
              img={testimonialPhotos[updatedItems[0].imageId].img}
              size={testimonialPhotos[updatedItems[0].imageId].size}
              position={testimonialPhotos[updatedItems[0].imageId].position}
            />
            <Text>{updatedItems[0].text}</Text>
            <Victim>{updatedItems[0].victim}</Victim>
          </CurrentTestimonial>
          <NextTestimonial>
            <Photo
              img={testimonialPhotos[updatedItems[2].imageId].img}
              small
              size={testimonialPhotos[updatedItems[2].imageId].size}
              position={testimonialPhotos[updatedItems[2].imageId].position}
              onClick={() => sortItems(2)}
            />
            <LineMarker right>
              <Marker right />
            </LineMarker>
          </NextTestimonial>
        </CarrousselWrapper>
      )}
    </>
  );
};

Carroussel.propTypes = {
  items: arrayOf(TestimonialPropType).isRequired
};

export default Carroussel;
