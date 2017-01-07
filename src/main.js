/**
 * Purpose: The main entry point of the game
 * Source:  main.js
 */

/* jshint esversion: 6 */

import { h, render } from 'preact';

import StartupGame from './game';

import './css/main.scss';

/**
 * If the user's browser supports service worker, we'll install one
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceworker.js').catch(function(err) {
    console.error('ServiceWorker registration failed: ', err);
  });
}

/**
 * Add some Analytics
 */
if (location.href.indexOf('localhost') < 0) {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-30977471-1', 'auto');
  ga('send', 'pageview');
}

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
