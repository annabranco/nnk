/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { arrayOf } from 'prop-types';
import { getDevice } from '../../../utils';
import { MOBILE, TABLET } from '../../../constants/devices';
import { Testimony01, Testimony02, Testimony03 } from '../../../assets/images';
import { TestimonialPropType } from '../../../types';
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

const DEVICE_VERSION = getDevice() === MOBILE || getDevice() === TABLET;

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
          <PreviousTestimonial device={DEVICE_VERSION}>
            <Photo
              img={testimonialPhotos[updatedItems[1].imageId].img}
              onClick={() => sortItems(1)}
              position={testimonialPhotos[updatedItems[1].imageId].position}
              size={testimonialPhotos[updatedItems[1].imageId].size}
              small
            />
            {!DEVICE_VERSION && (
              <LineMarker>
                <Marker />
              </LineMarker>
            )}
          </PreviousTestimonial>
          <CurrentTestimonial>
            <Photo
              img={testimonialPhotos[updatedItems[0].imageId].img}
              position={testimonialPhotos[updatedItems[0].imageId].position}
              size={testimonialPhotos[updatedItems[0].imageId].size}
            />
            <Text>{updatedItems[0].text}</Text>
            <Victim>{updatedItems[0].victim}</Victim>
          </CurrentTestimonial>
          <NextTestimonial device={DEVICE_VERSION}>
            <Photo
              img={testimonialPhotos[updatedItems[2].imageId].img}
              onClick={() => sortItems(2)}
              position={testimonialPhotos[updatedItems[2].imageId].position}
              size={testimonialPhotos[updatedItems[2].imageId].size}
              small
            />
            {!DEVICE_VERSION && (
              <LineMarker right>
                <Marker right />
              </LineMarker>
            )}
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
