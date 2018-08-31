import alt from '../alt.js';
import IndexAction from '../actions/IndexAction';

class IndexStore {
    
	constructor() {
		this.index = 'Not Change Yet';
		this.bindListeners({
	      dataFetched: IndexAction.fetchedData
	    });
	}

	dataFetched(test){
		this.index = test;
	}
}

export default alt.createStore(IndexStore, 'IndexStore');