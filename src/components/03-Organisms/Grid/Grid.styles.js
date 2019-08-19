import styled, { css } from 'styled-components';

const Grid = styled.div`
  display: grid;

  ${props => props.columns && css`
    grid-template-columns: ${props.columns};
  `}

  ${props => props.rows && css`
    grid-template-rows: ${props.rows};
  `}

  ${props => props.gap && css`
    grid-gap: ${props.gap}px;
  `}

  ${props => props.columnGap && css`
    grid-column-gap: ${props.columnGap}px;
  `}

  ${props => props.rowGap && css`
    grid-row-gap: ${props.rowGap}px;
  `}
`;

export default Grid;
