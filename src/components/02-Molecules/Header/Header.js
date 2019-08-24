import React, { memo, useContext } from 'react';
import Context from '../../Context';
import { Heading1 } from '../../01-Atoms/Heading/Heading.styles';
// import SkipLink from '../../01-Atoms/SkipLink/SkipLink.styles';
import HeaderStyles from './Header.styles';
import { Container } from '../../../styles/generic.container.styles';
import typography from '../../../styles/settings.typography.styles';


function Header() {
  const { title } = useContext(Context);

  return (
    <HeaderStyles>
      <Container>
        <Heading1 regular noMargin wght={typography.weight.medium}>{title}</Heading1>
      </Container>
    </HeaderStyles>
  );
}

export default memo(Header);
