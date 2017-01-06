import { atob, btoa } from 'abab'; // Because for testing, actually.

class SaveManager {

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

  /**
   * Saves the game's data asynchronously to LocalStorage
   */
  save (saveObject) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        // btoa() is used for basic encryption
        localStorage.setItem("saveData", btoa(JSON.stringify(saveObject)));
        resolve();
      }.bind(this), 0);
    });
  }

  clear () {
    localStorage.clear();
  }
}

export default SaveManager;
