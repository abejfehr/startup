// Assertions
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
const expect = chai.use(chaiAsPromised).expect;
const should = chai.use(chaiAsPromised).should();

// Mock Libraries
import 'mock-local-storage'
import {atob, btoa} from 'abab'

// Other classes
import TeamType from '../target/teamtype'

// Class Under Test
// import StartupGame from '../target/game';

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
  })));
});

afterEach(() => {
  // Clear all the save data each time
  localStorage.clear();
  localStorage.itemInsertionCallback = null;
});

describe('the game', () => {
  describe('the basics', () => {
    it('should be instantiable', () => {
      // var game = new StartupGame();
      // expect(game).to.not.be.null;
    });
  });
});
