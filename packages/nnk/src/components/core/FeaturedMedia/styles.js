import { css, styled } from 'frontity';
import Image from '@frontity/components/image';
import { sizeSmall } from '../../../setup/themes';

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

  ${({ read }) =>
    read &&
    css`
      filter: grayscale(1) opacity(0.3);
    `}
`;
StyledImage.displayName = 'StyledImage';
