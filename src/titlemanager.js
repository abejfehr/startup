class TitleManager {
  constructor () {
    document.title = "Untitled";
  }

  update (totalViews) {
    if (totalViews >= 100) {
      document.title = "Your Startup";
    }
  }
}

export default TitleManager;
