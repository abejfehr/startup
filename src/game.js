/**
 * Purpose: The main game loop
 * Source:  game.js
 */

 /* jshint esversion: 6 */

import Chance from 'chance';

import React from 'react';

import Master from './view/Master';

import Team from './team';
import Worker from './worker';

import SaveManager from './savemanager';
import FaviconManager from './faviconmanager';

import TeamType from './teamtype';

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

    /**
     * Creates a SaveManager that can be used for this game
     */
    this.saveManager = new SaveManager();

    /**
     * Creates a FaviconManager
     */
    this.faviconManager = new FaviconManager();

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

  start () {
    // Loads the data and kicks off the timer as soon as the data is loaded.
    this.saveManager.load()
    .then(function (loadedData) {
      // Initialize the different team types
      this.initTeams();

      // Go through the loaded data and get all the workers
      var workers = [];
      for (let worker of loadedData.workers) {
        var newWorker = new Worker(worker.name, 0);
        this.addWorkerToTeam(worker.team, newWorker);
        workers.push(newWorker);
      }

      this.setState({
        views: loadedData.views + 1,
        workers,
      });
      this.queuedViews = loadedData.queuedViews;

      // I'm commenting this out for now, I think Scott only used this for testing
      // this.addWorkerToTeam(GRAPHIC_DESIGN, new Worker(Chance().first() + " " + Chance().last(), 0));
      // console.log("Names: ", this.state.teams[GRAPHIC_DESIGN].workers);
      window.requestAnimationFrame(this.step.bind(this));
    }.bind(this))
    .catch(function () {
      this.setState({
        views: 1,
        workers: [],
      });
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
    teams[TeamType.GRAPHIC_DESIGN] = new Team({
      name: TeamType.GRAPHIC_DESIGN,
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
    // Also constructs the list of workers to save
    var workers = [];
    for (let [teamName, team] of Object.entries(this.state.teams)) {
      for (let worker of team.workers) {
        workers.push({
          name: worker.name,
          team: teamName,
        });
      }
    }
    this.saveManager.save({
      views: this.state.views,
      queuedViews: this.queuedViews,
      workers,
    });

    // Recursively do this again
    window.requestAnimationFrame(this.step.bind(this));
  }

  /**
   * The callback for handling workers being added to the game
   */
  onHire (team) {
    // Add a new worker to a specific team
    console.log(`Someone has been hired to work on ${team}`);
    var newWorker = new Worker(Chance().first() + " " + Chance().last(), 0);
    this.addWorkerToTeam(team, newWorker);
    var workers = this.state.workers;
    workers.push(newWorker);
    this.setState({ workers });
  }

  render () {
    return <Master {...this.state} onHire={this.onHire.bind(this)} />
  }
}

export default StartupGame;
