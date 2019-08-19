import styled from 'styled-components';
import spacing from './settings.spacing.styles';

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding-right:  ${spacing.padding * 2}px;
  padding-left: ${spacing.padding * 2}px;
`;

export const SectionContainer = Container.withComponent('section');
