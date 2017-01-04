class FaviconManager {
  constructor () {
    this.link = document.querySelector('link[type=icon]') || document.createElement('link');
    this.link.rel = "icon";
    this.link.type = 'image/x-icon';
    this.link.href = 'assets/favicons/transparent.ico';
    document.getElementsByTagName('head')[0].appendChild(this.link);
  }

  update (totalViews) {
    if (totalViews >= 100) {
      if (this.link.href.indexOf('basic.ico') < 0) {
        this.link.href = 'assets/favicons/basic.ico';
      }
    }
  }
}

export default FaviconManager;
