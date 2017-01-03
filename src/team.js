/**
 * Purpose: The team class
 * Source:  team.js
 */

 /* jshint esversion: 6 */

/**
 * Groups workers together into a team.
 */
export default class Team {
  /**
   * @param {Object} team - The Object that contains the paramaters
   *  @param {String} n - The name
   *  @param {String} desc - The description
   *  @param {Function} rate
   *   Calculates the rate of views for the current level
   *   or the given level.
   *   @return {Number} _ - The rate of views expressed as a positive rational number
   *  @param {Array} workers - The list of workers in this group
   */
  constructor (team) {
    this.name = team.n;
    this.desc = team.desc;
    this.rate = team.rate;
    this.workers = (team.workers) ? team.workers : [];
    this.cost = team.cost;
  }

  getRate () {
    return this.rate(this.workers.length);
  }

  getCost () {
    return this.cost(this.workers.length);
  }
}
