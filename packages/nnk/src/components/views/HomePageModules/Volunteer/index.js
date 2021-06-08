import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import {
  JoinUsBig,
  JoinUsMedium,
  JoinUsSmall
} from '../../../../assets/images';
import { getDevice } from '../../../../utils';
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
        {getDevice() === MOBILE ? (
          <MainImageAsBg img={JoinUsSmall} alt={texts.altMainImage} />
        ) : (
          <MainImage
            src={JoinUsMedium}
            srcset={`${JoinUsSmall} 320w, ${JoinUsMedium} 1024w, ${JoinUsBig} 2400w`}
          />
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
