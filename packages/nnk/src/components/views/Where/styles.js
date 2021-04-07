import { styled } from 'frontity';

export const Content = styled.div`
  padding: 20px 0;

  @media only screen and (min-width: 1024px) {
    padding: 20px 80px;
  }
`;
Content.displayName = 'Content';

export const Map = styled.img`
  width: 100%;
  border: 2px solid black;
  box-shadow: 0 0 40px 60px rgba(0, 0, 0, 0.5), inset 2px 2px 10px red;
  border-radius: 5px;
  cursor: pointer;

  @media (min-width: 1024px) and (max-height: 1000px) {
    position: absolute;
    top: 10px;
    right: 5%;
    width: 40%;
    max-height: 87%;
  }
`;
Map.displayName = 'Map';

export const ModalImage = styled.img`
  height: 100%;
  margin-left: 38vh;
  width: auto;
  cursor: pointer;
  overflow-x: scroll;

  @media all and (min-height: 700px) {
    margin-left: 45vh;
  }

  @media (min-width: 540px) and (min-height: 720px) {
    margin-left: 20vh;
  }

  @media all and (min-height: 800px) {
    margin-left: 50vh;
  }

  @media all and (min-width: 768px) {
    margin-left: 0;
    overflow: hidden;
  }

  @media (min-width: 712px) and (min-height: 1138px) {
    margin-left: 36vh;
  }

  @media (min-width: 768px) and (min-height: 1024px) {
    margin-left: 18vh;
  }
`;
ModalImage.displayName = 'ModalImage';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  color: ${({ colors }) => colors && colors.secondary};
  width: 100%;
`;
Section.displayName = 'Section';
