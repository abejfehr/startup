// Assertions
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
const expect = chai.use(chaiAsPromised).expect;
const should = chai.use(chaiAsPromised).should;

// Mock Libraries
import 'mock-local-storage'
import {atob, btoa} from 'abab'

// Class Under Test
import SaveManager from '../target/savemanager';

describe('the save manager', () => {
  describe('the basics', () => {
    it('should be instantiable', () => {
  		var saveManager = new SaveManager();
  		expect(saveManager).to.not.be.null;
  	});
  });

  describe('loading data', () => {
    it('should have functionality for loading previously saved data', () => {
  		var saveManager = new SaveManager();
  		expect(saveManager.load).to.not.be.undefined;
  	});

    it('should load a game object when there is one in localStorage', () => {
      localStorage.setItem("saveData", btoa(JSON.stringify({views: 3, queuedViews: 0.5})));

  		var saveManager = new SaveManager();
      expect(saveManager.load()).to.eventually.have.property('views');
      expect(saveManager.load()).to.eventually.have.property('queuedViews');
  	});

    it('should reject a promise when there is nothing in localStorage', () => {
      expect(1).to.be(2);
    });
  });

  describe('saving data', () => {
    it('should have functionality for saving new data', () => {
  		var saveManager = new SaveManager();
  		expect(saveManager.save).to.not.be.undefined;
  	});

    it('should save a given saveObject into localStorage', () => {
      expect(1).to.be(2);
    });
  });

});
