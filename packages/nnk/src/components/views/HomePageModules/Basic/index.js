import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { any } from 'prop-types';
import {
  BasicModuleWrapper,
  Description,
  TextWrapper,
  Text,
  DescriptionWrapper,
  ImageTitle,
  Image,
  ImagesWrapper
} from './styles';
import Link from '../../../core/Link';

const BasicModule = ({ texts, whyTexts, colors }) => (
  <BasicModuleWrapper>
    <DescriptionWrapper>
      <Description colors={colors}>{texts.description}</Description>
    </DescriptionWrapper>

    <ImagesWrapper>
      {texts.subItems.map(item => (
        <Link href={item.link} key={item.link}>
          <Image
            src="https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt={item.description}
          />
          <ImageTitle colors={colors}>{item.title}</ImageTitle>
        </Link>
      ))}
    </ImagesWrapper>
    <TextWrapper colors={colors}>
      <Text colors={colors}>{whyTexts.intro}</Text>
    </TextWrapper>
  </BasicModuleWrapper>
);

BasicModule.propTypes = {
  texts: any.isRequired,
  whyTexts: any.isRequired,
  colors: any.isRequired
};

export default BasicModule;
