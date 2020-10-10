import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { connect, styled } from 'frontity';
import Link from './core/Nav/Link';
import Nav from './core/Nav';
// import MobileMenu from './menu';
import LogoPng from '../assets/images/logo/Logo_NNK_trans_smaller.png';
import SpanishFlag from '../assets/images/other/flag-3d-round-250.png';

const Header = ({ state }) => {
  return (
    <>
      <HeaderContainer>
        <StyledLink link="/">
          <Logo src={LogoPng} />
        </StyledLink>
        {/* <MobileMenu /> */}
        <Nav />
        <LanguageFlag src={SpanishFlag} />
      </HeaderContainer>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const HeaderContainer = styled.div`
  /* position: fixed; */
  width: 80%;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: line;
  align-items: flex-end;
  justify-content: space-around;
  z-index: 100;
  height: 100px;
  background: black;
  width: 100%;
  padding: 0 100px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  width: 100px;
`;

const LanguageFlag = styled.img`
  width: 30px;
  margin-bottom: 30px;
`;
