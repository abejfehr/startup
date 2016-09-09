/**
 * Purpose: All worker classes
 * Source:  worker.js
 */

 /* jshint esversion: 6 */

/*
 * Should never be initialized.
 * Used as a base class for other worker types.
 */
class Worker {
   constructor (pointsPerMinute) {
       this.pointsPerMinute = pointsPerMinute;
   }
}
