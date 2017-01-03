// Assertions
import { expect } from 'chai';

// Mock the DOM
import jsdom from 'mocha-jsdom';
jsdom();

// Class Under Test
import FaviconManager from '../target/faviconmanager';

describe('the save manager', () => {
  describe('the basics', () => {
    it('should be instantiable', () => {
      var faviconManager = new FaviconManager();
      expect(faviconManager).to.not.be.null;
    });

    it('should give the page a blank favicon by default', () => {
      var faviconManager = new FaviconManager();
      var faviconLink = document.querySelector('link[type*=icon]');
      expect(faviconLink).to.not.be.null;
      expect(faviconLink).to.have.property('href', 'assets/favicons/favicon.ico');
    });
  });
});
