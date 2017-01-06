// Assertions
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
const expect = chai.use(chaiAsPromised).expect;
const should = chai.use(chaiAsPromised).should();

// Mock Libraries
import 'mock-local-storage'
import {atob, btoa} from 'abab'

// Other classes
import TeamType from '../target/teamtype';

// Class Under Test
import SaveManager from '../target/savemanager';

beforeEach(() => {
  // Insert some default save data for testing
  localStorage.setItem("saveData", btoa(JSON.stringify({
    views: 3, queuedViews: 0.5, workers: [
      {
        name: "Elon Musk",
        team: TeamType.GRAPHIC_DESIGN,
      },
      {
        name: "Will Smith",
        team: TeamType.GRAPHIC_DESIGN,
      },
    ],
    skills: [
      'html1', 'html2'
    ]
  })));
});

afterEach(() => {
  // Clear all the save data each time
  localStorage.clear();
  localStorage.itemInsertionCallback = null;
});

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
      var saveManager = new SaveManager();
      expect(saveManager.load()).to.eventually.have.property('views', 3);
      expect(saveManager.load()).to.eventually.have.property('queuedViews', 0.5);
    });

    it('should reject a promise when there is nothing in localStorage', () => {
      localStorage.clear();
      localStorage.itemInsertionCallback = null;
      var saveManager = new SaveManager();
      expect(saveManager.load()).to.eventually.be.rejected;
    });

    it('should be able to handle workers when workers were saved', () => {
      var saveManager = new SaveManager();
      saveManager.load().should.eventually.have.property('workers').with.length(2);
    });
  });

  describe('saving data', () => {
    it('should have functionality for saving new data', () => {
      var saveManager = new SaveManager();
      expect(saveManager.save).to.not.be.undefined;
    });

    it('should save a given saveObject into localStorage', () => {
      var saveManager = new SaveManager();
      saveManager.save({
        views: 7,
        queuedViews: 0.88,
        workers: [
          {
            name: "Anna Kendrick Lamar",
            team: TeamType.GRAPHIC_DESIGN,
          },
        ],
        skills: [
          'html1'
        ]
      }).then(() => {
        // Check in local storage directly to see if the data is there
        expect(JSON.parse(atob(localStorage.getItem('saveData')))).to.have.property('views', 7);
        expect(JSON.parse(atob(localStorage.getItem('saveData')))).to.have.property('queuedViews', 0.88);
        expect(JSON.parse(atob(localStorage.getItem('saveData')))).to.have.property('workers').with.length(1);
        expect(JSON.parse(atob(localStorage.getItem('saveData')))).to.have.deep.property('workers[0].name', 'Anna Kendrick Lamar');
        expect(JSON.parse(atob(localStorage.getItem('saveData')))).to.have.deep.property('workers[0].team', TeamType.GRAPHIC_DESIGN);
        expect(JSON.parse(atob(localStorage.getItem('saveData')))).to.have.deep.property('skills[0]', 'html1');
      });
    });
  });

  describe('clearing data', () => {
    it('should have a method to clear the data', () => {
      var saveManager = new SaveManager();
      expect(saveManager.clear).to.not.be.undefined;
    });

    it('should clear all of the data in the localStorage', () => {
      var saveManager = new SaveManager();
      saveManager.clear();
      expect(localStorage.getItem('saveData')).to.be.null;
    });
  });

});
