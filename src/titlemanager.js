class TitleManager {
  constructor () {
    document.title = 'Untitled';
  }

  update (skills) {
    if (skills.indexOf('startup') > -1) {
      if (document.title.indexOf('Startup') < 0) {
        document.title = 'Startup';
      }
    } else if (skills.indexOf('html2') > -1) {
      if (document.title.indexOf('My Website') < 0) {
        document.title = 'My Website';
      }
    } else {
      if (document.title.indexOf('Untitled') < 0) {
        document.title = 'Untitled';
      }
    }
  }
}

export default TitleManager;
