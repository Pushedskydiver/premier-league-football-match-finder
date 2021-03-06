import styled from 'styled-components';
import spacing from '../../../styles/settings.spacing.styles';
import { colors } from '../../../styles/settings.colors.styles';

const Header = styled.header`
  margin-bottom: ${spacing.margin}px;
  padding-top: ${spacing.padding}px;
  padding-bottom: ${spacing.padding}px;
  background-color: ${colors.core};
`;

export default Header;
