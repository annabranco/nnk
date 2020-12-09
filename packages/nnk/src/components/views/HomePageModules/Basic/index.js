import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { any } from 'prop-types';
import {
  BasicModuleWrapper,
  TextWrapper,
  Text,
  DescriptionWrapper,
  ImageTitle,
  Image,
  ImagesWrapper
} from './styles';
import Link from '../../../core/Link';
import { Photo01, Photo02, Photo03 } from '../../../../assets/images';
import {
  ColorsPropType,
  TextsHomePagePropType,
  TextsWhyPropType
} from '../../../../types';
import { getMediaQuery } from '../../../../utils';
import { MOBILE } from '../../../../constants/devices';

const photos = [Photo01, Photo02, Photo03];

const BasicModule = ({ texts, whyTexts, colors }) => (
  <BasicModuleWrapper>
    <DescriptionWrapper colors={colors}>
      <Text colors={colors}>{texts.description}</Text>
    </DescriptionWrapper>

    <ImagesWrapper>
      {getMediaQuery() === MOBILE ? (
        <>
          {texts.subItems.map((item, index) => (
            <Link link={item.link} key={item.link}>
              <ImageTitle colors={colors}>{item.title}</ImageTitle>
              <Image src={photos[index]} alt={item.description} />
            </Link>
          ))}
        </>
      ) : (
        <>
          {texts.subItems.map((item, index) => (
            <Link link={item.link} key={item.link}>
              <Image src={photos[index]} alt={item.description} />
              <ImageTitle colors={colors}>{item.title}</ImageTitle>
            </Link>
          ))}
        </>
      )}
    </ImagesWrapper>
    <TextWrapper colors={colors}>
      <Text colors={colors}>{whyTexts.intro}</Text>
    </TextWrapper>
  </BasicModuleWrapper>
);

BasicModule.propTypes = {
  texts: TextsHomePagePropType.isRequired,
  whyTexts: TextsWhyPropType.isRequired,
  colors: ColorsPropType.isRequired
};

export default BasicModule;
