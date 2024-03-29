import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { MOBILE } from '../../../../constants/devices';
import { getDevice } from '../../../../utils';
import Link from '../../../core/Link';
import { Photo01, Photo02, Photo03 } from '../../../../assets/images';
import {
  ColorsPropType,
  TextsHomePagePropType,
  TextsWhyPropType
} from '../../../../types';
import {
  BasicModuleWrapper,
  DescriptionWrapper,
  Image,
  ImageTitle,
  ImagesWrapper,
  Text,
  TextWrapper
} from './styles';
import { SeparatorBar } from '../styles';

const photos = [Photo01, Photo02, Photo03];

const BasicModule = ({ colors, texts, whyTexts }) => (
  <BasicModuleWrapper>
    <DescriptionWrapper colors={colors}>
      <Text colors={colors}>{whyTexts.intro}</Text>
    </DescriptionWrapper>

    <ImagesWrapper>
      {getDevice() === MOBILE ? (
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
    <SeparatorBar adjust="0, 20px" colors={colors} size="large" />
    <TextWrapper colors={colors}>
      <Text colors={colors}>{texts.description}</Text>
    </TextWrapper>
  </BasicModuleWrapper>
);

BasicModule.propTypes = {
  colors: ColorsPropType.isRequired,
  texts: TextsHomePagePropType.isRequired,
  whyTexts: TextsWhyPropType.isRequired
};

export default BasicModule;
