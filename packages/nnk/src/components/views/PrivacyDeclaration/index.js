/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'frontity';
import React, { useEffect } from 'react';
import { PRIVACY_TEXTS } from '../../../db';
import { StatePropType } from '../../../types';
import {
  PrivacyContainer,
  DeclarationTitle,
  DeclarationText,
  DeclarationSection,
  DeclarationList,
  DeclarationListItem
} from './styles';

const PrivacyDeclaration = ({ state }) => {
  const { colors, language } = state.theme;

  let privacyTexts = PRIVACY_TEXTS[language];

  const formatText = text => {
    const updatedText = text
      .replace('NO NAME KITCHEN', '<span>NO NAME KITCHEN</span>')
      .replace(
        'info@noamekitchen.org',
        '<a href="mailto:info@noamekitchen.org">info@noamekitchen.org</a>'
      )
      .replace(
        'http://nonamekitchen.org',
        '<span>http://nonamekitchen.org</span>'
      );
    return updatedText;
  };

  useEffect(() => {
    privacyTexts = PRIVACY_TEXTS[language];
  }, [language]);

  return (
    <PrivacyContainer colors={colors}>
      <DeclarationTitle colors={colors}>{privacyTexts.title}</DeclarationTitle>
      {Object.keys(privacyTexts.content).map(name => {
        const item = privacyTexts.content[name];
        return (
          <>
            {item.title && (
              <DeclarationSection>{item.title}</DeclarationSection>
            )}
            {item.list ? (
              <>
                <DeclarationList>
                  {item.listTitle && (
                    <DeclarationText>{item.listTitle}</DeclarationText>
                  )}
                  {item.content.map(content => (
                    <DeclarationListItem
                      dangerouslySetInnerHTML={{ __html: formatText(content) }}
                      key={content.slice(0, 60).replace(/\s/g, '')}
                    />
                  ))}
                </DeclarationList>
              </>
            ) : (
              <>
                {item.content.map(content => (
                  <DeclarationText
                    colors={colors}
                    dangerouslySetInnerHTML={{ __html: formatText(content) }}
                    key={content.slice(0, 60).replace(/\s/g, '')}
                  />
                ))}
              </>
            )}
          </>
        );
      })}
    </PrivacyContainer>
  );
};

PrivacyDeclaration.propTypes = {
  state: StatePropType
};

PrivacyDeclaration.defaultProps = {
  state: null
};

export default connect(PrivacyDeclaration);
