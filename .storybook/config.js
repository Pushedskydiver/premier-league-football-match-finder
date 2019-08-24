import React, { Fragment } from 'react'
import { addDecorator, configure } from '@storybook/react';
import GlobalStyles from '../src/styles/settings.global.styles';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = (cb) => (
  <Fragment>
    <GlobalStyles />
    {cb()}
  </Fragment>
);

addDecorator(withGlobal);

configure(loadStories, module);
