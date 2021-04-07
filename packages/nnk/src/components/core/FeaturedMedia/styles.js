import { styled } from 'frontity';
// eslint-disable-next-line import/no-unresolved
import Image from '@frontity/components/image';

export const Container = styled.div`
  margin-top: ${({ news }) => (news ? 0 : '16px')};
  height: 20vh;

  @media all and (min-width: 768px) {
    height: 250px;
  }
`;
Container.displayName = 'Container';

export const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
StyledImage.displayName = 'StyledImage';
