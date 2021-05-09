// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import config from '../../../setup/config';
import SectionHeader from '../SectionHeader';
import { getSocialLinks, getDevice, toggleBodyScroll } from '../../../utils';
import { JTTF_TEXTS } from '../../../db';
import { MOBILE, TABLET } from '../../../constants/devices';
import { VolunteersInAction } from '../../../assets/images';
import { StatePropType } from '../../../types';
import {
  Content,
  Icon,
  Info,
  InfoDescription,
  InfoTitle,
  JoinButton,
  MoreInfo,
  JTTFSection,
  Text
} from './styles';
import AppModal from '../../core/AppModal';
import ExternalForm from '../ExternalFrame';

const DEVICE_VERSION = getDevice() === MOBILE || getDevice() === TABLET;

const JumpToTheFieldSection = ({ state }) => {
  const [displayModal, toggleModal] = useState(false);
  const { colors, language } = state.theme;
  let texts = JTTF_TEXTS[language];
  const socialLinks = getSocialLinks(['Facebook', 'Twitter', 'Instagram']);

  const onToggleForm = () => {
    if (displayModal) {
      toggleModal(false);
      toggleBodyScroll();
    } else {
      toggleModal(true);
      toggleBodyScroll('hide');
    }
  };

  useEffect(() => {
    texts = JTTF_TEXTS[language];
  }, [language]);

  useEffect(() => {
    return () => toggleBodyScroll();
  }, []);

  return (
    <JTTFSection colors={colors}>
      <SectionHeader
        colors={colors}
        img={VolunteersInAction}
        position="50% 50%"
        socialLinks={socialLinks}
        title={DEVICE_VERSION ? texts.titleAlt : texts.title}
      />
      <Content>
        <Text>{texts.text1}</Text>
        {texts.text2 && <Text>{texts.text2}</Text>}
        {texts.text3 && <Text>{texts.text3}</Text>}
        <JoinButton colors={colors} onClick={onToggleForm}>
          {texts.form.joinUs}
        </JoinButton>
        <MoreInfo>
          {texts.infoIcons.map(item => (
            <Info colors={colors} key={item.icon}>
              <Icon className={item.icon} colors={colors} item={item.title} />
              <InfoTitle>{item.title}</InfoTitle>
              <InfoDescription colors={colors}>
                {item.description}
              </InfoDescription>
            </Info>
          ))}
        </MoreInfo>

        {displayModal && (
          <AppModal closeAction={onToggleForm} closeButton>
            <ExternalForm
              colors={colors}
              width={getDevice() === MOBILE ? 340 : 640}
              height={2930}
              src={config.volunteerForm}
              title="contact"
            />
          </AppModal>
        )}
      </Content>
    </JTTFSection>
  );
};

JumpToTheFieldSection.propTypes = {
  state: StatePropType
};

JumpToTheFieldSection.defaultProps = {
  state: null
};

export default connect(JumpToTheFieldSection);
