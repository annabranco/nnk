import { styled, css } from 'frontity';

export const InDevelopmentContainer = styled.div`
  ${({ displayTooltip }) =>
    displayTooltip &&
    css`
      &::before {
        position: absolute;
        content: 'Check back soon';
        opacity: 0.9;
        transform: translate(10px, 0px);
        border: 1px solid red;
        border-radius: 5px;
        background: white;
        padding: 2px 5px;
        font-size: 0.7rem;
        font-weight: 600;
        color: red;
        text-align: right;
      }
    `}
`;
InDevelopmentContainer.displayName = 'InDevelopmentContainer';
