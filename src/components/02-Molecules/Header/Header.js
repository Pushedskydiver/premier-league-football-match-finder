import React, { memo } from 'react';
import { Heading1 } from '../../01-Atoms/Heading/Heading.styles';
// import SkipLink from '../../01-Atoms/SkipLink/SkipLink.styles';
import HeaderStyles from './Header.styles';
import { Container } from '../../../styles/generic.container.styles';
import typography from '../../../styles/settings.typography.styles';

const Header = () => (
  <HeaderStyles>
    <Container>
      <Heading1 regular noMargin wght={typography.weight.medium}>Premier League Match Finder</Heading1>
    </Container>
  </HeaderStyles>
);

export default memo(Header);
