import { css, styled } from 'frontity';
import { sizeLargeTitle } from '../../../setup/themes';
import Link from '../Link';

export const Container = styled.div`
  margin: 0;
  width: 800px;
  padding: 24px;
`;
Container.displayName = 'Container';

export const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${({ colors }) => colors && colors.terciary};

  ${({ isReport }) =>
    isReport &&
    css`
      font-size: ${sizeLargeTitle};
    `}
`;
Title.displayName = 'Title';

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;
StyledLink.displayName = 'StyledLink';

export const BackToReports = styled.div`
  color: ${({ colors }) => colors && colors.terciary};
`;
BackToReports.displayName = 'BackToReports';

export const Author = styled.p`
  display: inline;
  font-size: 0.9em;
  color: ${({ colors }) => colors && colors.secondary};
`;
Author.displayName = 'Author';

export const DateWrapper = styled.p`
  display: inline;
  font-size: 0.9em;
  color: ${({ colors }) => colors && colors.secondary};
`;
DateWrapper.displayName = 'DateWrapper';

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
export const Content = styled.div`
  word-break: break-word;
  color: ${({ colors }) => colors && colors.secondary};
  ${({ isReport }) =>
    isReport &&
    css`
      margin: 40px auto;
      text-align: justify;
    `}

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
    line-height: 1.6em;
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
    text-decoration: underline;
    color: rgb(31, 56, 197);
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
    margin-bottom: 0;
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
