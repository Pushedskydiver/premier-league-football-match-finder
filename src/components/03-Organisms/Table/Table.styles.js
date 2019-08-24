import styled, { css } from 'styled-components';
import typography from '../../../styles/settings.typography.styles';
import { maxWidth, minWidth } from '../../../styles/settings.breakpoints.styles';
import spacing from '../../../styles/settings.spacing.styles';

export const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const THeader = styled.th`
  font-variation-settings: 'wght' ${typography.weight.bold};

  ${props => props.desktop && css`
    ${maxWidth('768', () => css`
      display: none;
    `)}
  `}

  ${props => props.left && css`
    text-align: left;
  `}

  ${props => props.center && css`
    text-align: center;
  `}
`;

export const TRow = styled.tr`
  display: grid;
  grid-template-columns: minmax(20px, 0.5fr) 4fr repeat(5, 1fr);

  ${maxWidth('768', () => css`
    grid-column-gap: 10px;
  `)}

  ${minWidth('768', () => css`
    grid-template-columns: minmax(20px, 0.5fr) 4fr repeat(6, 1fr);
    padding-top: ${spacing.padding / 4}px;
    padding-bottom: ${spacing.padding / 4}px;
  `)}
`;

export const TData = styled.td`
  ${props => props.noMobile && css`
    ${maxWidth('768', () => css`
      display: none;
    `)}
  `}

  ${props => props.last3 && css`
    display: grid;
    grid-template-columns: repeat(3, minmax(30px, 1fr));
    grid-column-gap: 5px;
  `}

  ${props => props.left && css`
    text-align: left;
  `}

  ${props => props.center && css`
    text-align: center;
  `}

  ${props => props.bold && css`
    font-variation-settings: 'wght' ${typography.weight.bold};
  `}
`;
