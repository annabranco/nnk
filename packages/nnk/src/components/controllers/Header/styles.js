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

  @media (min-height: 1400px) and (min-width: 2000px) {
    height: 120px;
  }
`;
HeaderContainer.displayName = 'HeaderContainer';

export const Logo = styled.img`
  width: 80px;
  transform: translate(0, 10px);

  @media only screen and (min-width: 768px) {
    width: 110px;
  }
  @media (min-height: 1400px) and (min-width: 2000px) {
    width: 120px;
  }
`;
Logo.displayName = 'Logo';

export const LanguageFlag = styled.img`
  z-index: 10;
  position: fixed;
  bottom: 10vh;
  margin-bottom: 30px;
  width: 50px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    position: initial;
    width: 30px;
  }

  @media (min-height: 1400px) and (min-width: 2000px) {
    width: 60px;
    transform: translate(0, 15px);
  }
`;
LanguageFlag.displayName = 'LanguageFlag';
