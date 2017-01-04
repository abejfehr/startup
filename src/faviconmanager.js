class FaviconManager {
  constructor () {
    var link = document.querySelector('link[type*=icon]') || document.createElement('link');
    link.rel = "icon";
    link.type = 'image/x-icon';
    link.href = 'assets/favicons/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}

export default FaviconManager;
