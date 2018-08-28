import alt from '../alt.js';
import superagent from 'superagent';

class IndexAction {
    
	fetchData() {
		alert('Action Called');
 		superagent.get('/data')
			//.set("X-Access-Token", this.accessToken)
			.send()
			.end((error, response) => {
				alert('Super Agent Called');
			});

		return 'Return fetchData';
	}
}

export default alt.createActions(IndexAction);
