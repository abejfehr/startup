/**
 * Purpose: The main game loop
 * Source:  main.js
 */

 /* jshint esversion: 6 */

class StartupGame {
    constructor () {
        // The amount of points the player currently has
        this.points = 0;

        // Add the onClick handler to the whole body
        document.body.addEventListener('click', this.addPoints.bind(this, 1));
    }

    addPoints (howMany) {
        this.points += howMany;
        document.getElementById('points').innerText = this.points;
    }
}

var game = new StartupGame();
