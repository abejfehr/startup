// Assertions
import { expect } from 'chai';

// Mock the DOM
import jsdom from 'mocha-jsdom';
jsdom({
  skipWindowCheck: true,
});

// Class Under Test
import TitleManager from '../target/titlemanager';

describe('the title manager', () => {
  describe('the basics', () => {
    it('should be instantiable', () => {
      var titleManager = new TitleManager();
      expect(titleManager).to.not.be.null;
    });

    it('should make the page untitled by default', () => {
      var titleManager = new TitleManager();
      expect(document.title).to.equal('Untitled');
    });

    it('should update the favicon to something basic when 100 total views are reached', () => {
      var titleManager = new TitleManager();
      expect(document.title).to.equal('Untitled');
      titleManager.update(100);
      expect(document.title).to.equal('Your Startup');
    });
  });
});
