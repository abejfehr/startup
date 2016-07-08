/**
 * Purpose: The main game loop
 * Source:  main.js
 */

 /* jshint esversion: 6 */

class StartupGame {
    constructor () {
        // The amount of points the player currently has
        this.saveData = {
            points: 0
        }

        // Add the onClick handler to the whole body
        document.body.addEventListener('click', this.addPoints.bind(this, 1));

        this.load().then((loadedData) => {
            this.saveData = loadedData;
            document.getElementById('points').innerText = this.saveData.points;
        });
    }

    addPoints (howMany) {
        this.saveData.points += howMany;
        document.getElementById('points').innerText = this.saveData.points;
        this.save();
    }

    /**
     * Saves the game's data asynchronously to LocalStorage
     */
    save () {
        setTimeout(() => {
            localStorage.setItem("saveData", btoa(JSON.stringify(this.saveData)));
        }, 0);
    }

    /**
     * Loads the game's data asynchronously from LocalStorage
     */
    load () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(JSON.parse(atob(localStorage.getItem("saveData"))));
            }, 0);
        });
    }
}

var game = new StartupGame();
