// Assertions
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
const expect = chai.use(chaiAsPromised).expect;
const should = chai.use(chaiAsPromised).should();

// Mock the DOM
import jsdom from 'mocha-jsdom';
jsdom();

// Class Under Test
import FaviconManager from '../target/faviconmanager';

beforeEach(() => {
});

afterEach(() => {
});

describe('the save manager', () => {
  describe('the basics', () => {
    it('should be instantiable', () => {
      var faviconManager = new FaviconManager();
      expect(faviconManager).to.not.be.null;
    });

    it('should give the page a blank favicon by default', () => {
      var faviconManager = new FaviconManager();
      var faviconLink = document.querySelector('link[rel*=icon]');
      expect(faviconLink).to.have.property('href', 'assets/favicons/favicon.ico');
    });
  });
});
