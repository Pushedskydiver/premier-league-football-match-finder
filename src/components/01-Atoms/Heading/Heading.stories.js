import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading1, Heading2 } from './Heading.styles';

storiesOf('Headings', module)
  .add('h1 with font weight of 600', () => <Heading1 wght="600">Heading - h1 600</Heading1>)
  .add('h2 with prop size of medium', () => <Heading2 medium>Heading - h2 medium</Heading2>);
