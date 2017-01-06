/**
 * Purpose: The main entry point of the game
 * Source:  main.js
 */

/* jshint esversion: 6 */

import React from 'react';
import {render} from 'react-dom';

import StartupGame from './game';

import './css/main.scss';

/**
 * If the user's browser supports service worker, we'll install one
 */
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('serviceworker.js').catch(function(err) {
//     console.error('ServiceWorker registration failed: ', err);
//   });
// }

/**
 * Let's get this party started!
 */
document.addEventListener('DOMContentLoaded', function () {
  // Draw the shit on the screen
  render(
    <StartupGame />,
    document.getElementById("page")
  );
});
