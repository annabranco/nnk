import { styled, css } from 'frontity';
import { fontText, sizeLarge, sizeMedium } from '../../../setup/themes';

export const CarrousselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 80vw;
`;
CarrousselWrapper.displayName = 'CarrousselWrapper';

export const CurrentTestimonial = styled.div`
  min-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
CurrentTestimonial.displayName = 'CurrentTestimonial';

export const NextTestimonial = styled.div`
  ${({ device }) =>
    device &&
    css`
      transform: translate(-80%, 0);
    `}
`;
NextTestimonial.displayName = 'NextTestimonial';

export const Photo = styled.div`
  z-index: 5;
  margin: 20px 50px;
  height: 100px;
  width: 100px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${({ img, position, size }) =>
    css`
      border-radius: 50%;
      background-image: ${`url(${img})`};
      background-size: ${size === 'normal' ? '100%' : size};
      background-position: ${position || 'left top'};
      background-repeat: no-repeat;
    `}

  ${({ img, small }) =>
    img &&
    small &&
    css`
      z-index: 4;
      height: 70px;
      width: 70px;
      margin-top: 40%;
      border: none;
      cursor: pointer;
      filter: sepia(0.6) opacity(0.6);
      &:hover {
        border: 3px solid rgba(255, 255, 255, 0.2);

        & + div {
          color: white;
        }
      }
    `};

  @media only screen and (min-width: 768px) {
    height: 150px;
    width: 150px;

    ${({ img, small }) =>
      img &&
      small &&
      css`
        filter: none;
        transform: none;
        height: 100px;
        width: 100px;
      `}
  }

  @media only screen and (min-width: 1200px) {
    height: 200px;
    width: 200px;

    ${({ img, small }) =>
      img &&
      small &&
      css`
        height: 100px;
        width: 100px;
      `}
  }
`;
Photo.displayName = 'Photo';

export const PreviousTestimonial = styled.div`
  ${({ device }) =>
    device &&
    css`
      transform: translate(80%, 0);
    `}
`;
PreviousTestimonial.displayName = 'PreviousTestimonial';

export const Text = styled.p`
  border: 1px dotted rgba(255, 255, 255, 0.2);
  font-family: ${fontText};
  font-size: ${sizeMedium};
  line-height: 1.5;
  padding: 25px;
  border-radius: 10px;
  font-style: italic;
  /* width: 300px; */
`;
Text.displayName = 'Text';

export const Victim = styled(Text)`
  font-weight: 900;
  font-size: ${sizeLarge};
  margin-top: 5px;
  border: 0;
  text-align: center;
`;
Victim.displayName = 'Victim';

export const LineMarker = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 60%;
  color: rgba(255, 255, 255, 0.5);

  ${({ right }) =>
    right &&
    css`
      align-items: flex-start;
      justify-content: flex-start;
    `}
`;
LineMarker.displayName = 'LineMarker';

export const Marker = styled.div`
  position: relative;
  width: 50%;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.4);

  &::before {
    content: '●';
    position: absolute;
    top: -8px;
    left: -4px;
  }

  ${({ right }) =>
    right &&
    css`
      &::before {
        left: unset;
        right: -4px;
      }
    `}
`;
Marker.displayName = 'Marker';
