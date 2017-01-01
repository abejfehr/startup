/**
 * Purpose: The main entry point of the game
 * Source:  main.js
 */

/* jshint esversion: 6 */

import React from 'react';
import {render} from 'react-dom';

import StartupGame from './game';

import './css/style.css';

/**
 * Let's get this party started!
 */
document.addEventListener('DOMContentLoaded', function () {
  // Draw the shit on the screen
  render(
    <StartupGame />,
    document.body
  );
});
