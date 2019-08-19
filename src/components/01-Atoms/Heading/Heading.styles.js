import styled, { css } from 'styled-components';
import typography from '../../../styles/settings.typography.styles';
import spacing from '../../../styles/settings.spacing.styles';

export const Heading1 = styled.h1`
  font-family: var(--font);

  ${props => !props.noMargin && css`
    margin: 0 0 ${(spacing.margin * 1.5)}px 0;
  `}

  ${props => props.noMargin && css`
    margin: 0;
  `}

  ${props => props.tiny && css`
    font-size: ${typography.heading.size.tiny};
  `}

  ${props => props.small && css`
    font-size: ${typography.heading.size.small};
  `}

  ${props => props.regular && css`
    font-size: ${typography.heading.size.regular};
  `}

  ${props => props.medium && css`
    font-size: ${typography.heading.size.medium};
  `}

  ${props => props.big && css`
    font-size: ${typography.heading.size.big};
  `}

  ${props => props.large && css`
    font-size: ${typography.heading.size.large};
  `}

  ${props => props.xl && css`
    font-size: ${typography.heading.size.xl};
  `}

  ${props => props.wght && css`
    font-variation-settings: 'wght' ${props.wght}
  `}
`;

export const Heading2 = Heading1.withComponent('h2');
export const Heading3 = Heading1.withComponent('h3');
export const Heading4 = Heading1.withComponent('h4');
