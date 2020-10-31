import { styled, css } from 'frontity';

export const InDevelopmentContainer = styled.div`
  ${({ displayTooltip }) =>
    displayTooltip &&
    css`
      &::before {
        position: absolute;
        content: 'Check back soon';
        border: 1px solid red;
        background: white;
        padding: 2px 5px;
        border-radius: 5px;
        font-weight: 600;
        color: red;
        opacity: 0.9;
        text-align: right;
        font-size: 0.7rem;
        transform: translate(10px, 0px);
      }
    `}
`;
