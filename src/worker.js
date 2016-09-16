/**
 * Purpose: All worker related classes
 * Source:  worker.js
 */

 /* jshint esversion: 6 */

/**
 * Groups workers together into a team.
 */
class Team {
  /**
   * @param {String} n - The name
   * @param {String} desc - The description
   * @param {Function} rate
   *  Calculates the rate of views for the current level
   *  or the given level.
   *  @param {Integer} level - to be used to calculate rate of views at this level (optional)
   *  @return {Number} _ - The rate of views expressed as a positive rational number
   * @param {Array} workers - The list of workers in this group
   */
  constructor (n, desc, rate, workers) {
    this.name = n;
    this.desc = desc;
    this.rate = rate;
    this.workers = (workers) ? workers : [];
  }

  getRate (l) {
    return (!l) ? this.rate(this.workers.length) : this.rate(l);
  }
}

class Worker {
  constructor (n, time) {
    this.name = n;
    this.timestamp = time;
  }
}
