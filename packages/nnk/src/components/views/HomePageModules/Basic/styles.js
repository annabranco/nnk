import { styled } from 'frontity';
import { BaseText, BaseTitle, sizeXLarge } from '../../../../setup/themes';

export const MockImage = styled.img`
  margin-top: 20px;
`;

export const BasicModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled(BaseText)`
  margin: 20px 0;
  white-space: pre;
  line-height: 1.5;
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  padding: 20px 0;
`;

export const Image = styled.img`
  border-radius: 4px;
  margin: 0 10px 10px;
  height: 190px;
  width: 300px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.7);
`;

export const ImageTitle = styled(BaseTitle)`
  font-size: ${sizeXLarge};
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled(DescriptionWrapper)`
  border-top: 6px solid ${({ colors }) => colors && colors.terciary};
  border-radius: 2px;
  margin-top: 20px;
  max-width: 80%;
  padding-top: 30px;
`;

export const Text = styled(BaseText)`
  white-space: pre;
  line-height: 1.2;
  color: ${({ colors }) => colors && colors.secondary};
  text-align: center;
`;
