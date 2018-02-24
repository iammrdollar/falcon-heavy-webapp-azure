import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import './css/index.css';
import FalconLanding from './components/FalconLanding/FalconLanding';
import AboutFalcon from './components/AboutFalcon/AboutFalcon';

class App extends Component {
  render() {
    return (
      <div className="App">
	<Helmet>
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
		<link rel="manifest" href="/favicon/site.webmanifest" />
		<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
		<link rel="shortcut icon" href="/favicon/favicon.ico" />
		<meta name="msapplication-TileColor" content="#da532c" />
		<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
		<meta name="theme-color" content="#ffffff" />
	</Helmet>

      	<Router>
      		<div>

				<Route exact path="/" component={FalconLanding} />
				<Route exact path="/about" component={AboutFalcon} />

				<div>
				  <ul className="navul">
				    <li>
				      <Link exact to="/" >Home</Link>
				    </li>
				    <li>
				      <Link exact to="/about" >About</Link>
				    </li>
				  </ul>
				</div>      	
			</div>
      	</Router>
      </div>
    );
  }
}

export default App;



ReactDOM.render(<App />, document.getElementById('root'));
/*



*/
