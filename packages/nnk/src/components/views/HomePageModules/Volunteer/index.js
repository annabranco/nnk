import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { VolunteersInAction } from '../../../../assets/images';
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
    const lastWord = words.pop();
    return (
      <Title colors={colors}>
        {words.join(' ')}
        <Highlighted colors={colors}> {lastWord}</Highlighted>?
      </Title>
    );
  };

  return (
    <ModuleWrapper>
      <Link link="/join-us/">{styleTitle(texts.question)}</Link>
      <ImgLink link="/join-us/">
        {getMediaQuery() === MOBILE ? (
          <MainImageAsBg img={VolunteersInAction} alt={texts.altMainImage} />
        ) : (
          <MainImage src={VolunteersInAction} alt={texts.altMainImage} />
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
