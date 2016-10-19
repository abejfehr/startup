import { expect } from 'chai';
import View from '../target/view';

describe('the view module', () => {
	it('should be instantiable', () => {
		var view = new View();
		expect(view).to.not.be.null;
	});
});
