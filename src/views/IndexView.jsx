import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexAction from '../actions/IndexAction';
import IndexStore from '../stores/IndexStore';
import {PieChart} from 'react-easy-chart';
 
class IndexView extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = IndexStore.getState();
	    this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		IndexStore.listen(this.onChange);
		IndexAction.fetchingData();
	}

	componentWillUnmount() {
	    IndexStore.unlisten(this.onChange);
    }

	onChange() {
	    var st = IndexStore.getState();
	    this.setState(st);
	}

    render() {
    	return (<div>
			<Router>
			    <div>
			      <ul>
			        <li>
			          <Link to="/">Home</Link>
			        </li>
			        <li>
			          <Link to="/about">About</Link>
			        </li>
			        <li>
			          <Link to="/topics">Topics</Link>
			        </li>
			      </ul>

			      <hr />

			      <Route exact path="/" component={Home} />
			      <Route path="/about" component={About} />
			      <Route path="/topics" component={Topics} />
			    </div>
			  </Router>
    		<h1>{this.state.index}</h1>
    		<Button bsStyle="danger" onClick={this.onChange.bind(this)}>Hello World Danger</Button>
    		<Button bsStyle="primary">Hello World Primary</Button>
    		<Button bsStyle="success">Hello World Success</Button>
        <PieChart  data={[
      { key: 'A', value: 100 },
      { key: 'B', value: 200 },
      { key: 'C', value: 50 }
    ]} />
    	</div>);
    }
}
export default IndexView;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);