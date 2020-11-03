import { styled } from 'frontity';
import { BaseText, BaseTitle, sizeXLarge } from '../../../../setup/themes';

export const MockImage = styled.img`
  margin-top: 20px;
`;

export const BasicModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Description = styled(BaseText)`
  margin: 20px 0;
  text-align: center;
  line-height: 1.5;
  white-space: pre;
  color: ${({ colors }) => colors && colors.secondary};
`;

export const DescriptionWrapper = styled.div`
  padding: 20px 0;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 190px;
  width: 300px;
  margin: 0 5px;
`;

export const ImageTitle = styled(BaseTitle)`
  font-size: ${sizeXLarge};
  text-align: center;
  color: ${({ colors }) => colors && colors.secondary};
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled(DescriptionWrapper)`
  max-width: 80%;
  margin-top: 20px;
  padding-top: 30px;
  border-top: 6px solid ${({ colors }) => colors && colors.terciary};
  border-radius: 2px;
`;

export const Text = styled(BaseText)`
  line-height: 1.2;
  white-space: pre;
  text-align: center;
  color: ${({ colors }) => colors && colors.secondary};
`;
