import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { VolunteersInAction } from '../../../../assets/images';
import {
  ModuleWrapper,
  MainImage,
  Title,
  Highlighted,
  ImgLink
} from './styles';
import { ColorsPropType, TextsVolunteerPropType } from '../../../../types';

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
      {styleTitle(texts.question)}
      <ImgLink link="/join-us/">
        <MainImage src={VolunteersInAction} alt={texts.altMainImage} />
      </ImgLink>
    </ModuleWrapper>
  );
};

VolunteerModule.propTypes = {
  colors: ColorsPropType.isRequired,
  texts: TextsVolunteerPropType.isRequired
};

export default VolunteerModule;
