import alt from '../alt.js';
import superagent from 'superagent';

class IndexAction {
    
	fetchingData() {
		//alert('Action Called');
 		superagent.get('http://google.com')
			//.set("X-Access-Token", this.accessToken)
			.send()
			.end((error, response) => {
				this.fetchedData("Super Agent Called");
			});

		return 'Fetching data';
	}

	fetchedData(msg){
		return msg;
	}
}

export default alt.createActions(IndexAction);
