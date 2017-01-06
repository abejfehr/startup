class TitleManager {
  constructor () {
    document.title = 'Untitled';
  }

  update (totalViews) {
    if (totalViews >= 100) {
      if (document.title.indexOf('startup') < 0) {
        document.title = 'Startup';
      }
    }
  }
}

export default TitleManager;
