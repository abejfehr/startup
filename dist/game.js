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
        this.saveData = {
            points: 1,
            queuedPoints: 0,
            workers: []
        };

        /**
         * The timestamp since the last animation frame step. This is only used
         * by the step function.
         */
        this.lastTimestamp = 0;

        /**
         * The number of points to add every minute of the game. 6 is totally
         * arbitrary, it should really be calculated dynamically each step from
         * powerups or whatever the user has
         */
        this.pointsPerMinute = 0;

        /**
         * The number of points to add per click. 1 is arbitrary, but it's a
         * good starting value.
         */
        this.pointsPerClick = 1;

        // Add the click handler to the whole body
        document.body.addEventListener('click', function () {
            this.saveData.queuedPoints += this.pointsPerClick;
        }.bind(this));
    }

    /**
     * Saves the game's data asynchronously to LocalStorage
     */
    save () {
        setTimeout(function () {
            // btoa() is used for basic encryption
            localStorage.setItem("saveData", btoa(JSON.stringify(this.saveData)));
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
          this.saveData = loadedData;
          this.saveData.points += 1;
          /**
           * TODO: Workers aren't persistent yet, we need some way of storing
           * them that aren't instances of the objects themselves.
           */
          this.saveData.workers = [];
          window.requestAnimationFrame(this.step.bind(this));
      }.bind(this))
      .catch(function () {
          window.requestAnimationFrame(this.step.bind(this));
      }.bind(this));
    }

    /**
     * Updates the points on the screen.
     */
    updatePoints () {
        document.getElementById('points').innerText = this.saveData.points;
    }

    getPointsPerMinute () {
        var n = 0;
        if (this.saveData.workers.map) {
            this.saveData.workers.map(function (worker) {
                n += worker.pointsPerMinute;
            }.bind(this));
        }
        return n;
    }

    /**
     * The game loop that handles adding points. Takes a DOMHighResTimeStamp.
     */
    step (timestamp) {
        // Get the time difference in milleseconds since the last timestamp
        var progress = (timestamp - this.lastTimestamp) / 1000 / 60;
        this.lastTimestamp = timestamp;

        // Figure out how many points to add
        this.saveData.queuedPoints += this.getPointsPerMinute() * progress;

        // Add the floor of the number of points to add
        this.saveData.points += Math.floor(this.saveData.queuedPoints);
        this.saveData.queuedPoints %= 1;

        // Saves the game, probably way too often
        this.save();

        // Writes the number of points to the screen
        this.updatePoints();

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
   constructor (pointsPerMinute) {
       this.pointsPerMinute = pointsPerMinute;
   }
}
