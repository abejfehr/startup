/**
 * Purpose: The main game loop
 * Source:  main.js
 */

 /* jshint esversion: 6 */

const GRAPHIC_DESIGN = "Graphic Design";

class StartupGame {
  constructor () {
    
    this.teams = {
      GRAPHIC_DESIGN: new Team(GRAPHIC_DESIGN, "They draw.", function(l) { return l*60; });
    };

    /**
     * Real number of views
     */
    this.views = 1;

    /**
     * Nominal number of views
     */
    this.queuedViews = 1;

    /**
     * A list of all of the workers that your company has
     */
    this.workers = [];

    /**
     * A list of all of the skills that your company has
     */
    this.skills = [];

    /**
     * The timestamp since the last animation frame step. This is only used
     * by the step function
     */
    this.lastTimestamp = 0;

    /**
     * The number of ticks that have passed in the game so far
     */
    this.ticks = 0;

    /**
     * The number of views to add every minute of the game. 6 is totally
     * arbitrary, it should really be calculated dynamically each step from
     * powerups or whatever the user has
     */
    this.viewsPerMinute = 0;

    /**
     * The number of views to add per click. 1 is arbitrary, but it's a
     * good starting value.
     */
    this.viewsPerClick = 1;

    // Add the click handler to the whole body
    document.body.addEventListener('click', function () {
        this.queuedViews += this.viewsPerClick;
    }.bind(this));

    // Update the title to untitled
    document.title = "untitled";
  }

  /**
   * Saves the game's data asynchronously to LocalStorage
   */
  save () {
    setTimeout(function () {
      // btoa() is used for basic encryption
      localStorage.setItem("saveData", btoa(JSON.stringify({
        views: this.views,
        queuedViews: this.queuedViews,
      })));
    }.bind(this), 0);
  }

  /**
   * Loads the game's data asynchronously from LocalStorage.
   */
  load () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (localStorage.getItem("saveData") === null) {
          reject();
        } else {
          resolve(JSON.parse(atob(localStorage.getItem("saveData"))));
        }
      }.bind(this), 0);
    }.bind(this));
  }

  start () {
    // Loads the data and kicks off the timer as soon as the data is loaded.
    this.load()
    .then(function (loadedData) {
      this.views = loadedData.views;
      this.queuedViews = loadedData.queuedViews;

      this.views += 1;
      /**
       * TODO: Workers aren't persistent yet, we need some way of storing
       * them that aren't instances of the objects themselves.
       */
      this.workers = [];
      addWorkerToTeam(GRAPHIC_DESIGN, new Worker("John Smith", 0));
      window.requestAnimationFrame(this.step.bind(this));
    }.bind(this))
    .catch(function () {
      window.requestAnimationFrame(this.step.bind(this));
    }.bind(this));
  }

  /**
   * Adds the given worker to the given team.
   */
  addWorkerToTeam (team, worker) {
    this.teams[team].worker.push(worker);
  }

  /**
   * Updates the views on the screen.
   */
  updateViews () {
    document.getElementById('views').innerText = this.views;
  }

  getWorkerViews () {
    for (let i = 0; i < this.teams.length; i++) {

    }
  }

  /**
   * The game loop that handles adding views. Takes a DOMHighResTimeStamp.
   */
  step (timestamp) {
    // Get the time difference in milleseconds since the last timestamp
    var progress = (timestamp - this.lastTimestamp) / 1000 / 60;
    this.lastTimestamp = timestamp;
    this.ticks += progress;

    // Add more views to queue
    for (let i = 0; i < this.workers.length; i++) {
      this.queuedViews += this.workers[i].getRate() * progress;
    }

    // Add the floor of the number of views to add
    this.views += Math.floor(this.queuedViews);
    this.queuedViews %= 1;

    // Saves the game, probably way too often
    this.save();

    // Writes the number of views to the screen
    this.updateViews();

    // Recursively do this again
    window.requestAnimationFrame(this.step.bind(this));
  }
}

/**
 * Let's get this party started!
 */
var game = new StartupGame();
game.start();

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
