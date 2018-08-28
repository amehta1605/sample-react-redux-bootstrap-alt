import alt from '../alt.js';
import IndexAction from '../actions/IndexAction';

class IndexStore {
    
	constructor() {
		this.index = 'Not Yet';
		this.bindListeners({
	      fetchCalled: IndexAction.fetchData
	    });
	}

	fetchCalled(test){
		this.index = 'ANKIT';
		alert(test);
		alert('Store Called');
	}
}

export default alt.createStore(IndexStore, 'IndexStore');