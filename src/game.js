/**
 * Purpose: The main game loop
 * Source:  game.js
 */

 /* jshint esversion: 6 */

import Chance from 'chance';

import React from 'react';

import Master from './view/Master';

import Team from './team';

import Worker from './worker'

const GRAPHIC_DESIGN = "Graphic Design";

class StartupGame extends React.Component {
  constructor () {
    super();

    var teams = {};

    /**
     * The timestamp since the last animation frame step. This is only used
     * by the step function
     */
    this.lastTimestamp = 0;

    /**
     * Nominal number of views
     */
    this.queuedViews = 1;

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

    this.state = {
      /**
       * Real number of views
       */
      views: 0,

      /**
       * The teams
       */
      teams,

      /**
       * A list of all of the workers that your company has
       */
      workers: [],

      /**
       * A list of all of the skills that your company has
       */
      skills: [],
    }

    // Start the game
    this.start();
  }

  /**
   * Saves the game's data asynchronously to LocalStorage
   */
  save () {
    setTimeout(function () {
      // btoa() is used for basic encryption
      localStorage.setItem("saveData", btoa(JSON.stringify({
        views: this.state.views,
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
      this.setState({
        views: loadedData.views + 1,
        /**
         * TODO: Workers aren't persistent yet, we need some way of storing
         * them that aren't instances of the objects themselves.
         */
        workers: [],
      });
      this.queuedViews = loadedData.queuedViews;

      this.initTeams();
      
      this.addWorkerToTeam(GRAPHIC_DESIGN, new Worker(Chance().first() + " " + Chance().last(), 0));
      console.log("Names: ", this.state.teams[GRAPHIC_DESIGN].workers);
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
    var teams = this.state.teams;
    teams[team].workers.push(worker);
    this.setState({teams});
  }

  /**
   * Creates all the workers and updates the state.
   */
  initTeams () {
    var teams = this.state.teams;
    teams[GRAPHIC_DESIGN] = new Team({
      name: GRAPHIC_DESIGN,
      desc: "They draw.",
      rate: function(x) { return x * 60; },
      workers: [],
    });

    this.setState({ teams });
  }

  getWorkerViews (progress) {
    var sum = 0;
    for (let i = 0; i < this.state.teams.length; i++) {
      sum += this.state.workers[i].getRate() * progress;
    }

    return sum;
  }

  /**
   * The game loop that handles adding views. Takes a DOMHighResTimeStamp.
   */
  step (timestamp) {
    // Get the time difference in milleseconds since the last timestamp
    var progress = (timestamp - this.lastTimestamp) / 1000 / 60;
    this.lastTimestamp = timestamp;
    this.ticks += progress;

    this.queuedViews = this.getWorkerViews(progress);

    // Add the floor of the number of views to add
    var views = this.state.views + Math.floor(this.queuedViews);
    this.setState({views});
    this.queuedViews %= 1;

    // Saves the game, probably way too often
    this.save();

    // Recursively do this again
    window.requestAnimationFrame(this.step.bind(this));
  }

  render () {
    return <Master {...this.state} />
  }
}

export default StartupGame;
