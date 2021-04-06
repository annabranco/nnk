import { css, styled } from 'frontity';
import {
  sizeLarge,
  sizeLargeTitle,
  sizeMedium,
  sizeSmall,
  sizeSmallTitle
} from '../../../setup/themes';
import Link from '../Link';

export const PostWrapper = styled.div`
  width: 100vw;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
PostWrapper.displayName = 'PostWrapper';

export const Container = styled.div`
  margin: 0;
  width: 100%;
  padding: 24px;
  background: ${({ colors }) => colors && colors.secondary};
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);

  @media only screen and (min-width: 768px) {
    width: 800px;
  }
`;
Container.displayName = 'Container';

export const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${({ colors }) => colors && colors.terciary};
  font-size: ${sizeLargeTitle};
  text-align: justify;
  padding: 5px 15px;
`;
Title.displayName = 'Title';

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;
StyledLink.displayName = 'StyledLink';

export const BackToReports = styled.p`
  position: fixed;
  bottom: 10%;
  left: 10%;
  border: ${({ colors }) => `2px solid ${colors.terciary}`};
  border-radius: 5px;
  padding: 5px 10px;
  background: ${({ colors }) => colors && colors.terciary};
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${sizeMedium};
  width: 15%;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);

    & > i {
      transform: translate(-5px, 0);
      transition: transform ease 0.5s;
    }
  }
`;
BackToReports.displayName = 'BackToReports';

export const BackToReportsArrow = styled.i`
  transition: transform ease 0.2s;
`;
BackToReportsArrow.displayName = 'BackToReportsArrow';

export const Author = styled.p`
  display: inline;
  font-size: 0.9em;
  color: ${({ colors }) => colors && colors.primary};
`;
Author.displayName = 'Author';

export const DateWrapper = styled.p`
  display: inline;
  font-size: 0.9em;
  color: ${({ colors }) => colors && colors.primary};
`;
DateWrapper.displayName = 'DateWrapper';

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
export const Content = styled.div`
  word-break: break-word;
  color: ${({ colors }) => colors && colors.primary};
  ${({ isReport }) =>
    isReport &&
    css`
      margin: 40px auto;
      text-align: justify;
    `}
  padding: 0 5px;
  font-size: ${sizeSmallTitle};
  @media only screen and (min-width: 1200px) {
    font-size: ${sizeLarge};
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-right: auto;
      margin-left: auto;
    }

    .alignright {
      margin-left: 24px;
      float: right;
    }

    .alignleft {
      margin-right: 24px;
      float: left;
    }
  }

  * {
    max-width: 100%;
  }

  p {
    line-height: 2;
    margin: 20px auto;
    width: 100%;
    color: ${({ colors }) => colors && colors.primary};
    text-align: justify;
  }

  span {
    line-height: 2;
    margin: 20px auto;
    font-size: ${sizeSmallTitle};
  }

  li:not([class]),
  a[class=''] {
    line-height: 1.5;
    margin-left: 50px;
    list-style: disc;
  }

  form {
    margin: 30px auto;

    @media only screen and (min-width: 768px) {
      margin-left: 50px;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    border-left: 4px solid rgba(12, 17, 43);
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 4px 16px;
  }

  a {
    text-decoration: none;
    color: #26b9ff;
    width: 100%;

    & button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }

  button {
    margin: 10px auto 40px;
    background: crimson;
    border: 1px solid red;
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;
    text-align: center;
  }

  /* Input fields styles */

  input[type='text'],
  input[type='email'],
  input[type='url'],
  input[type='tel'],
  input[type='number'],
  input[type='date'],
  textarea,
  select {
    display: block;
    outline-color: transparent;
    border: 1px solid #ced4da;
    border-radius: 4px;
    margin: 8px 0 4px 0;
    background-color: #fff;
    background-clip: padding-box;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: #495057;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type='submit'] {
    display: inline-block;
    border: 1px solid #1f38c5;
    border-radius: 4px;
    margin: 30px 0 10px 0;
    background-image: none;
    background-color: #1f38c5;
    padding: 12px 36px;
    white-space: nowrap;
    vertical-align: middle;
    font-size: 14px;
    line-height: 1.42857143;
    font-weight: 400;
    color: #fff;
    cursor: pointer;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
`;
