import { expect } from 'chai';
import SaveManager from '../target/savemanager';

describe('the save manager', () => {
  // Basics
  it('should be instantiable', () => {
		var saveManager = new SaveManager();
		expect(saveManager).to.not.be.null;
	});

  // Loading
  it('should have functionality for loading previously saved data', () => {
		var saveManager = new SaveManager();
		expect(saveManager.load).to.not.be.undefined;
	});

  it('should load a game object when there is one in WebStorage', () => {
		var saveManager = new SaveManager();
		expect(saveManager.load).to.not.be.undefined;
	});

  // Saving
  it('should have functionality for saving new data', () => {
		var saveManager = new SaveManager();
		expect(saveManager.save).to.not.be.undefined;
	});

});
