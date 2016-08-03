'use strict';

import React from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
import Routes from './components/Routes';

// CSS
require('./styles/bootstrap/bootstrap.less');
require('./styles/style.scss');

// polyfills
require('extensible-polyfill').patch('immutable')
require('es6-promise').polyfill();
require('whatwg-fetch');

render(Routes, document.getElementById('app'));
