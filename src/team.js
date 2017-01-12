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
   *  @param {Function} rate - The unit output of a worker
   *  @param {Array} workers - The list of workers in this group
   *  @param {Function} cost
   *   Calculates the rate that cost increases for the current level
   *   or the given level.
   * @param {Float} multiplier - The co-efficient of the rate function
   * @param {Number} trigger - The number of totalViews before this is shown
   */
  constructor (team) {
    this.name = team.n;
    this.desc = team.desc;
    this.rate = team.rate;
    this.workers = (team.workers) ? team.workers : [];
    this.cost = team.cost;
    this.multiplier = 1.0;
    this.trigger = team.trigger;
  }

  getRate () {
    return this.multiplier*this.rate*this.workers.length * 60;
  }

  getCost () {
    return this.cost(this.workers.length);
  }
}
