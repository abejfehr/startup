class FaviconManager {
  constructor () {
    this.link = document.querySelector('link[type=icon]') || document.createElement('link');
    this.link.rel = "icon";
    this.link.type = 'image/x-icon';
    document.getElementsByTagName('head')[0].appendChild(this.link);
  }

  update (skills) {
    if (skills.indexOf('favicon') > -1) {
      if (this.link.href && this.link.href.indexOf('basic.ico') < 0) {
        this.link.href = 'assets/favicons/basic.ico';
      }
    } else {
      if (this.link.href && this.link.href.indexOf('transparent.ico') < 0) {
        this.link.href = 'assets/favicons/transparent.ico';
      }
    }
  }
}

export default FaviconManager;
