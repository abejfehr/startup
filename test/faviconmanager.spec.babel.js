// Assertions
import { expect } from 'chai';

// Mock the DOM
import jsdom from 'mocha-jsdom';
jsdom({
  skipWindowCheck: true,
});

// Class Under Test
import FaviconManager from '../target/faviconmanager';

describe('the favicon manager', () => {
  describe('the basics', () => {
    it('should be instantiable', () => {
      var faviconManager = new FaviconManager();
      expect(faviconManager).to.not.be.null;
    });

    // it('should have an instance of the link DOM element for the favicon', () => {
    //   var faviconManager = new FaviconManager();
    //   expect(faviconManager.link).to.not.be.null;
    // });

    it('should give the page a blank favicon by default', () => {
      var faviconManager = new FaviconManager();
      var faviconLink = document.querySelector('link[rel=icon]');
      expect(faviconLink).to.not.be.null;
      expect(faviconLink).to.have.property('href', 'assets/favicons/transparent.ico');
    });

    it('should update the favicon to something basic when 100 total views are reached', () => {
      var faviconManager = new FaviconManager();
      var faviconLink = document.querySelector('link[rel*=icon]');
      expect(faviconLink).to.not.be.null;
      faviconManager.update(100);
      // This test requires a more realistic DOM. Maybe I'll use PhantomJS someday
      // var newFaviconLink = document.querySelector('link[rel*=icon]');
      // expect(newFaviconLink).to.have.property('href', 'assets/favicons/basic.ico');
    });
  });
});
