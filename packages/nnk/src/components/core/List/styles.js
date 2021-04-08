import { css, styled } from 'frontity';
import {
  sizeLarge,
  sizeMedium,
  sizeSmall,
  sizeSmallestTitle
} from '../../../setup/themes';
import Link from '../Link';
import { BackToReports, BackToReportsArrow } from '../Post/styles';

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

export const AuthorName = styled.span`
  font-size: 0.9em;
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

export const PublishDate = styled.span`
  font-size: 0.9em;
  ${({ isReport, colors }) =>
    isReport &&
    css`
      color: ${colors.secondary};
      text-align: center;
    `}
`;

export const StyledLink = styled(Link)`
  padding: 15px 0;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;
ButtonsWrapper.displayName = 'ButtonsWrapper';

export const PageButton = styled.p`
  text-align: center;
  font-size: ${sizeLarge};
  text-transform: uppercase;
  font-weight: 700;
  margin-top: -15px;

  color: ${({ colors }) => colors && colors.terciary};

  @media all and (min-width: 768px) {
    font-size: ${sizeMedium};
  }

  @media all and (min-width: 1200px) {
    font-size: 0.8rem;
    margin-top: -30px;
  }

  &:hover {
    box-shadow: none;
    & > i {
      transform: translate(-10px, 0);
      transition: transform ease 0.5s;
    }
  }

  ${({ right }) =>
    right &&
    css`
      &:hover {
        box-shadow: none;
        & > i {
          transform: translate(10px, 0);
          transition: transform ease 0.5s;
        }
      }
    `}
  ${({ alone }) =>
    alone &&
    css`
      position: absolute;
      right: 20px;
    `}
`;
PageButton.displayName = 'PageButton';

export const PageButtonArrow = styled(BackToReportsArrow)`
  margin: ${({ right }) => (right ? '0 0 0 5px' : '0 5px 0 0')};
  font-size: ${sizeLarge};

  @media all and (min-width: 768px) {
    font-size: ${sizeSmallestTitle};
  }

  @media all and (min-width: 1200px) {
    font-size: ${sizeMedium};
  }
`;
PageButtonArrow.displayName = 'PageButtonArrow';
