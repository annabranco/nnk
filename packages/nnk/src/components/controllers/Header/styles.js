import { styled, css } from 'frontity';

export const HeaderContainer = styled.header`
  z-index: 5;
  display: flex;
  flex-direction: line;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ colors }) => colors.primary};
  width: 100%;
  padding: 2px 20px;
  height: 92px;
  border-bottom: ${({ colors }) => `4px solid ${colors.terciary}`};

  /* ${({ activeLanguage, colors }) =>
    activeLanguage === 'en' &&
    css`
      height: 110px;
      border-bottom: 4px solid ${colors.terciary};
    `} */

  @media only screen and (min-width: 768px) {
    justify-content: space-around;
    align-items: flex-end;
    padding: 2px 40px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 2px 80px;
  }
`;
HeaderContainer.displayName = 'HeaderContainer';

export const Logo = styled.img`
  width: 80px;
  transform: translate(0, 10px);

  ${({ activeLanguage }) =>
    activeLanguage === 'en' &&
    css`
      transform: translate(0, 7px);
    `}

  @media only screen and (min-width: 768px) {
    width: 110px;
  }
`;
Logo.displayName = 'Logo';

export const LanguageFlag = styled.img`
  display: none;
  margin-bottom: 30px;
  width: 30px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;
LanguageFlag.displayName = 'LanguageFlag';
