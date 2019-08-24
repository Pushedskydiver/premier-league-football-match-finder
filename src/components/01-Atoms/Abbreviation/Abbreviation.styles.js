import styled, { css } from 'styled-components';
import { minWidth } from '../../../styles/settings.breakpoints.styles';

const Abbr = styled.abbr`
text-decoration: none;

  ${minWidth('768', () => css`
    &::before {
      content: attr(title);
    }
  `)}
`;

export default Abbr;
