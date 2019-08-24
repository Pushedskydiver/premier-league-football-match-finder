import styled, { css } from 'styled-components';
import { colors } from '../../../styles/settings.colors.styles';
import typography from '../../../styles/settings.typography.styles';
import spacing from '../../../styles/settings.spacing.styles';

const Form = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: ${spacing.padding / 4}px;
  color: ${colors.dark};
  font-size: 90%;
  font-variation-settings: 'wght' ${typography.weight.medium};
  text-align: center;
  line-height: normal;

  ${props => props.win && css`
    background-color: ${colors.core};
  `}

  ${props => props.draw && css`
    background-color: ${colors.neutral};
  `}

  ${props => props.lose && css`
    background-color: ${colors.danger};
  `}
  `;

export default Form;
