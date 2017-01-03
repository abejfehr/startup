class FaviconManager {

  constructor () {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.href = 'assets/favicons/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  }

}

export default FaviconManager;
