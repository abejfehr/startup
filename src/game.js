/**
 * Purpose: The main game loop
 * Source:  game.js
 */

 /* jshint esversion: 6 */

import Chance from 'chance';
import { h, Component } from 'preact';

import FaviconManager from './faviconmanager';
import Master from './view/Master';
import SaveManager from './savemanager';
import Team from './team';
import TeamType from './teamtype';
import TitleManager from './titlemanager';
import Worker from './worker';

class StartupGame extends Component {
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
    this.queuedViews = 0;

    /**
    * The number of ticks that have passed in the game so far
    */
    this.ticks = 0;

    /**
     * Creates a SaveManager that can be used for this game
     */
    this.saveManager = new SaveManager();

    /**
     * Creates a FaviconManager
     */
    this.faviconManager = new FaviconManager();
    this.titleManager = new TitleManager();

    this.tooltips = [];

    this.state = {
      /**
       * Total number of views since the beginning of the game
       */
      totalViews: 0,

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

      /**
       * The modifier the changes the rate of all worker views
       */
      multiplier: 1,

      /**
       * The number of views you automatically earn each second
       */
       viewsPerSecond: 0,
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
        totalViews: loadedData.totalViews + 1,
        workers,
        skills: loadedData.skills,
        multiplier: loadedData.multiplier,
      });
      this.queuedViews = loadedData.queuedViews;

      window.requestAnimationFrame(this.step.bind(this));
    }.bind(this))
    .catch(function () {
      // There is no save file yet
      this.setState({
        views: 1,
        totalViews: 1, // Should match the views in the beginning
        workers: [],
        skills: [],
        multiplier: 1,
        viewsPerSecond: 0,
      });
      window.requestAnimationFrame(this.step.bind(this));
    }.bind(this));

    // Make a mousemove listener
    window.onmousemove = function(e) {
      var x = `${e.clientX + 20}px`,
          y = `${e.clientY + 20}px`;
      for (let i = 0; i < this.tooltips.length; ++i) {
        this.tooltips[i].style.top = y;
        this.tooltips[i].style.left = x;
      }
    }.bind(this);

  }

  /**
   * Adds the given worker to the given team.
   */
  addWorkerToTeam (team, worker) {
    var teams = this.state.teams;
    teams[team].workers.push(worker);
    this.setState({ teams });
  }

  /**
   * Removes the given worker from the given team.
   */
  removeWorkerFromTeam (team, worker) {
    var teams = this.state.teams;
    var workerList = teams[team].workers;
    workerList.splice(
      workerList.indexOf(
        workerList.find(el => el.id === worker.id)
      ), 1
    );

    this.setState({ teams });
  }

  /**
   * Creates all the workers and updates the state.
   */
  initTeams () {
    var teams = this.state.teams;
    teams[TeamType.GRAPHIC_DESIGN] = new Team({
      name: TeamType.GRAPHIC_DESIGN,
      desc: "They draw.",
      rate: x => x * 10,
      workers: [],
      cost: n => n * n + 5,
    });

    this.setState({ teams });
  }

  getWorkerViews (progress) {
    var sum = 0;
    for (let team of Object.keys(this.state.teams)) {
      sum += this.state.teams[team].getRate() * progress;
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

    this.queuedViews += this.getWorkerViews(progress) * this.state.multiplier;

    // Calculate the total number of views per second
    var viewsPerSecond = this.getWorkerViews(1 / 60) * this.state.multiplier;

    // Add the floor of the number of views to add
    var views = this.state.views + Math.floor(this.queuedViews);
    var totalViews = this.state.totalViews + Math.floor(this.queuedViews);
    this.setState({ views, totalViews, viewsPerSecond });
    this.queuedViews %= 1;

    // See if there's any reason to update the favicon or the title
    this.titleManager.update(this.state.skills);
    this.faviconManager.update(this.state.skills);

    // Saves the game, probably way too often
    // Also constructs the list of workers to save
    var workers = [];
    for (let team of Object.keys(this.state.teams)) {
      for (let worker of this.state.teams[team].workers) {
        workers.push({
          name: worker.name,
          team: team,
        });
      }
    }
    this.saveManager.save({
      views,
      queuedViews: this.queuedViews,
      totalViews,
      workers,
      skills: this.state.skills,
      multiplier: this.state.multiplier,
    });

    // Manage the tooltips
    this.tooltips = document.querySelectorAll('.css1 .skill-description-tooltip');
    // debugger;

    // Recursively do this again
    window.requestAnimationFrame(this.step.bind(this));
  }

  /**
   * The callback for handling workers being added to the game
   */
  onHire (team) {
    // Determine the cost
    var cost = this.state.teams[team].getCost();
    var views = this.state.views;

    // If we don't have enough, we can't hire
    if (views < cost) { return; }

    // Create the worker
    var newWorker = new Worker(Chance().name(), 0);

    // Pay for the worker
    views -= cost;

    // Add the worker to the team and the workers array
    this.addWorkerToTeam(team, newWorker);
    var workers = this.state.workers;
    workers.push(newWorker);

    // Update the changes in the state
    this.setState({ workers, views });
  }

  onReset () {
    // Make sure first
    if (!window.confirm("Are you sure you'd like to reset?")) { return; }

    this.setState({
      views: 0,
      totalViews: 0, // Should match the views in the beginning
      teams: [],
      workers: [],
      skills: [],
      multiplier: 1,
    }, () => {
      // Clear the save
      this.saveManager.clear();

      // Refresh the page
      location.reload();
    });
  }

  onSkillPurchased (skill) {
    // Determine the cost
    var cost = skill.cost;
    var views = this.state.views;

    // If we don't have enough, we can't obtain the skill
    if (views < cost) { return; }

    // If we already have the skill, don't re-add it
    if (this.state.skills.find(el => el == skill.id)) { return; }

    // Add the skill to the list of skills
    var skills = this.state.skills;

    // Update the team multiplier if the skill has one
    var teams = this.state.teams;
    var multiplier = this.state.multiplier;
    if (skill.multiplier) {
      if (skill.multiplier.team === TeamType.NONE) {
        multiplier += skill.multiplier;
      } else {
        teams[skill.multiplier.team].multiplier += skill.multiplier.multiplier;
      }
    }

    // Pay for the skill
    views -= cost;

    // Add the skill to the list
    skills.push(skill.id);

    // Update the changes in the state
    this.setState({ skills, views, multiplier, teams });
  }

  onFire (team, id) {
    var workers = this.state.workers;

    this.removeWorkerFromTeam(team, workers.find(el => el.id === id));

    workers.splice(
      workers.indexOf(
        workers.find(el => el.id === id)
      ), 1
    );

    this.setState({ workers });
  }

  onChoice (choice) {
    this.onSkillPurchased({
      id: choice,
      cost: 0,
    });
  }

  render () {
    return <Master
      {...this.state}
      onChoice={this.onChoice.bind(this)}
      onHire={this.onHire.bind(this)}
      onFire={this.onFire.bind(this)}
      onReset={this.onReset.bind(this)}
      onSkillPurchased={this.onSkillPurchased.bind(this)}/>
  }
}

export default StartupGame;
