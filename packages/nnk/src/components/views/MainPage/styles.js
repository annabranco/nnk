import { styled, css } from 'frontity';

export const MainContainer = styled.div`
  background: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  ${({ img }) => css`
    background-image: ${`url(${img})`};
    background-repeat: no-repeat;
    ${'' /* background-attachment: fixed; */}
    background-size: 100%;
    background-position: center 15%;
    border: 1px solid black;
  `}
`;

export const SocialContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 40px;
`;

// export const MainPhoto = styled.img`
//   margin-bottom: 50px;
// `;
