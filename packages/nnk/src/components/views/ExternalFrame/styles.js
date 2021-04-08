import { styled } from 'frontity';

export const LoadingSpinner = styled.img`
  width: 40px;
`;
LoadingSpinner.displayName = 'LoadingSpinner';

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;
SubscribeContainer.displayName = 'SubscribeContainer';

export const SubscribeFrame = styled.iframe`
  width: 640;
  height: 800;
  frameborder: 0;
  marginheight: 0;
  marginwidth: 0;
`;
SubscribeFrame.displayName = 'SubscribeFrame';
