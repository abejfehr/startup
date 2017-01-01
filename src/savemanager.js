export default class SaveManager {

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
  save () {
    setTimeout(function () {
      // btoa() is used for basic encryption
      localStorage.setItem("saveData", btoa(JSON.stringify({
        views: this.state.views,
        queuedViews: this.queuedViews,
      })));
    }.bind(this), 0);
  }

}
