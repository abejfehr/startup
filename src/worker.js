/**
 * Purpose: All worker classes
 * Source:  worker.js
 */

 /* jshint esversion: 6 */

class Worker {
  /**
   * @param {String} n - The name
   * @param {String} desc - The description
   * @param {Integer} level - The level of the worker
   * @param {Function} rate
   *  Calculates the rate of views for the current level
   *  or the given level.
   *  @param {Integer} level - to be used to calculate rate of views at this level (optional)
   *  @return {Number} _ - The rate of views expressed as a positive rational number
   */
  constructor (n, desc, level, rate) {
    this.name = n;
    this.desc = desc;
    this.level = level;
    this.rate = rate;
  }

  getRate (l) {
    return (!l) ? this.rate(this.level) : this.rate(l);
  }
}
