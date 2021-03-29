import { styled } from 'frontity';

export const Content = styled.div`
  padding: 20px 0;

  @media only screen and (min-width: 1024px) {
    padding: 20px 80px;
  }
`;
Content.displayName = 'Content';

export const Map = styled.img`
  position: absolute;
  top: 10px;
  right: 5%;
  width: 45%;
  border: 2px solid black;
  box-shadow: 0 0 40px 60px rgba(0, 0, 0, 0.5), inset 2px 2px 10px red;
  border-radius: 5px;
  cursor: pointer;
`;
Map.displayName = 'Map';

export const ModalImage = styled.img`
  height: 100%;
  width: auto;
  overlay: auto;
  cursor: pointer;
`;
ModalImage.displayName = 'ModalImage';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  color: ${({ colors }) => colors && colors.secondary};
  width: 100%;
`;
Section.displayName = 'Section';
