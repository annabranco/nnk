import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { JoinUs } from '../../../../assets/images';
import { getMediaQuery } from '../../../../utils';
import Link from '../../../core/Link';
import { MOBILE } from '../../../../constants/devices';
import { ColorsPropType, TextsVolunteerPropType } from '../../../../types';
import {
  Highlighted,
  ImgLink,
  MainImage,
  MainImageAsBg,
  ModuleWrapper,
  Title
} from './styles';

const VolunteerModule = ({ colors, texts }) => {
  const styleTitle = title => {
    const words = title.split(' ');
    const lastWords = words.splice(-2);
    return (
      <Title colors={colors}>
        {words.join(' ')}
        <Highlighted colors={colors}> {lastWords.join(' ')}</Highlighted>?
      </Title>
    );
  };

  return (
    <ModuleWrapper>
      <Link link="/join-us/">{styleTitle(texts.question)}</Link>
      <ImgLink link="/join-us/">
        {getMediaQuery() === MOBILE ? (
          <MainImageAsBg img={JoinUs} alt={texts.altMainImage} />
        ) : (
          <MainImage src={JoinUs} alt={texts.altMainImage} />
        )}
      </ImgLink>
    </ModuleWrapper>
  );
};

VolunteerModule.propTypes = {
  colors: ColorsPropType.isRequired,
  texts: TextsVolunteerPropType.isRequired
};

export default VolunteerModule;
