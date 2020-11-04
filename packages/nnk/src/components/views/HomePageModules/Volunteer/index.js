import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { VolunteersInAction } from '../../../../assets/images';
import {
  ModuleWrapper,
  MainImage,
  Title,
  Highlighted,
  ImgLink
} from './styles';

const VolunteerModule = ({ texts, colors }) => {
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
      <ImgLink link="/players">
        <MainImage src={VolunteersInAction} alt={texts.altMainImage} />
      </ImgLink>
    </ModuleWrapper>
  );
};

export default VolunteerModule;
