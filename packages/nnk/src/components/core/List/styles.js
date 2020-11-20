import { css, styled } from 'frontity';
import { sizeMedium } from '../../../setup/themes';
import Link from '../Link';

// --- List Item

export const ArticleWrapper = styled.article`
  ${({ isReport, colors }) =>
    isReport &&
    css`
      margin: 30px auto;
      border: 1px solid ${colors.primary};
      box-shadow: 0 0 10px 2px ${colors.secondary};
      ${'' /* background: white; */}

      &:hover: {
        border: 2px solid ${colors.terciary};
      }
    `}
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;

  ${({ isReport, colors }) =>
    isReport &&
    css`
      width: 100%;
      text-align: center;
      color: ${colors.terciary};
    `}
`;

export const AuthorName = styled.span`
  font-size: 0.9em;
`;

export const InfoBox = styled.div`
  ${({ isReport }) =>
    isReport &&
    css`
      display: flex;
      flex-direction: column;
      margin: 0;
      align-items: center;
      text-align: justify;
    `}
`;

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;

export const PublishDate = styled.span`
  font-size: 0.9em;
  ${({ isReport, colors }) =>
    isReport &&
    css`
      color: ${colors.secondary};
      text-align: center;
    `}
`;

export const Excerpt = styled.div`
  line-height: 1.6em;

  ${({ isReport }) =>
    isReport &&
    css`
      display: flex;
      flex-direction: column;
      margin: 20px 30px;
      align-items: center;
      text-align: justify;
    `}
`;

// --- List

export const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
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
