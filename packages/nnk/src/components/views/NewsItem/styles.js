import { css, styled } from 'frontity';
import {
  sizeMedium,
  sizeSmall,
  sizeSmallTitle,
  sizeDefaultText,
  fontTitleNews,
  fontTitle,
  sizeLarge
} from '../../../setup/themes';
import Link from '../../core/Link';

// --- List Item

export const ArticleWrapper = styled.article`
  position: relative;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  ${({ colors }) =>
    colors &&
    css`
      &:hover {
        background: rgba(255, 255, 204, 0.1);
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
      }
    `}

  @media all and (min-width: 768px) {
    ${({ highlight }) =>
      highlight &&
      css`
        grid-column: span 2;
        border: 1px solid rgba(0, 0, 0, 0.2);

        &:hover {
          background: rgba(255, 255, 204, 0.3);
        }
      `}
    :
  }
`;

export const AuthorName = styled.span`
  font-size: 0.9em;
`;

export const Excerpt = styled.div`
  line-height: 1.6em;
  color: ${({ colors }) => colors && colors.primary};
  font-size: ${sizeLarge};
  padding: 5px 10px 10px;
  text-align: left;

  & > p {
    color: ${({ colors }) => colors && colors.primary};
  }

  @media all and (min-width: 768px) {
    font-size: ${sizeDefaultText};
  }
`;

export const InfoBox = styled.div`
  text-align: right;
  font-size: ${sizeSmall};
`;

export const PublishDate = styled.span`
  padding-right: 5px;
  font-size: 0.9em;
  color: darkgrey;
  font-size: ${({ mobile }) => (mobile ? sizeLarge : sizeSmall)};
`;

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;

export const Title = styled.h3`
  font-size: ${sizeSmallTitle};
  margin: 0;
  padding: 5px 10px;
  padding-bottom: 5px;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  color: ${({ colors }) => colors && colors.primary};
  font-size: ${sizeSmallTitle};
  font-family: ${fontTitleNews};
  font-weight: 500;

  ${({ read }) =>
    read &&
    css`
      &&:after {
        content: ${`"${read}"`};
        font-size: ${sizeMedium};
        letter-spacing: 1px;
        margin-left: 5px;
        vertical-align: middle;
        text-transform: uppercase;
        color: red;
        font-family: ${fontTitle};
      }
    `}
`;
// --- List
// 'already read';
export const Container = styled.section`
  width: 100vw;
  margin: 0;
  padding: 24px;
  list-style: none;
  background: ${({ colors }) => colors && colors.secondary};
`;

export const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: ${({ colors }) => colors && colors.secondary};
`;

// -- Pagination

export const Text = styled.em`
  display: inline-block;
  margin-top: 30px;
  color: ${({ colors }) => colors && colors.terciary};
`;

export const Tag = styled.p`
  font-size: ${sizeMedium};
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ colors }) => colors && colors.terciary};
  background: rgba(255, 255, 255, 0.7);
  padding: 2px 5px;
  font-family: ${fontTitle};
  border-radius: 0 0 0 5px;
`;
