/**
 * Purpose: The main game loop
 * Source:  main.js
 */

 /* jshint esversion: 6 */

class StartupGame {
  constructor () {
    /**
     * The various data about the game that can be immediately saved/loaded
     */
    // this.gameData = {
    //   views: 1,
    //   queuedViews: 0,
    //   workers: [],
    //   skills: []
    // };

    this.views = 1;

    this.queuedViews = 1;

    this.workers = [];

    this.skills = [];

    /**
     * The timestamp since the last animation frame step. This is only used
     * by the step function.
     */
    this.lastTimestamp = 0;

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
      loadedData.workers.push(new Worker("First worker", "Test worker", 1, function(level) { return level*60; }));
      window.requestAnimationFrame(this.step.bind(this));
    }.bind(this))
    .catch(function () {
      window.requestAnimationFrame(this.step.bind(this));
    }.bind(this));
  }

  /**
   * Updates the views on the screen.
   */
  updateViews () {
    document.getElementById('views').innerText = this.views;
  }

  /**
   * The game loop that handles adding views. Takes a DOMHighResTimeStamp.
   */
  step (timestamp) {
    // Get the time difference in milleseconds since the last timestamp
    var progress = (timestamp - this.lastTimestamp) / 1000 / 60;
    this.lastTimestamp = timestamp;

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
