/**
 * Purpose: All worker related classes
 * Source:  worker.js
 */

 /* jshint esversion: 6 */

export default class Worker {
  /**
   * Represents one worker
   *
   * @constructor
   */
  constructor (n, time) {
    /**
     * The name of the worker
     */
    this.name = n;
    /**
     * The tick that this worker was hired on
     */
    this.dateHired = time;
  }
}
