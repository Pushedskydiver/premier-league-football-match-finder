import styled, { css } from 'styled-components';
import typography from '../../../styles/settings.typography.styles';

export const TableStyles = styled.table`
  display: grid;
  grid-template-columns: 1fr 4fr repeat(5, 1fr);
  grid-column-gap: 10px;
  border-collapse: collapse;
`;

export const THeader = styled.th`
  font-variation-settings: 'wght' ${typography.weight.bold};

  ${props => props.left && css`
    text-align: left;
  `}

  ${props => props.center && css`
    text-align: center;
  `}
`;

export const TData = styled.td`
  ${props => props.left && css`
    text-align: left;
  `}

  ${props => props.center && css`
    text-align: center;
  `}
`;
