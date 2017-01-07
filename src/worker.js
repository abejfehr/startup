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
     * The unique identifier for the worker
     */
    this.id = W_COUNTER++;
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

var W_COUNTER = 0;
