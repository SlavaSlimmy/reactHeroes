import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

render(
  <Root />,
  document.getElementById('root')
)