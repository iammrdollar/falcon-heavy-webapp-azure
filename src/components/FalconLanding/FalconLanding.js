import React from 'react';
import ReactDOM from 'react-dom';
import falcon_heavy from '../../assets/falcon-heavy.png';
import {Helmet} from "react-helmet";


export default class Navbar extends React.Component {

	render() {
		return (
			<div>
		      	<Helmet title="Falcon Heavy Azure Learning Project"/>
		        <header className="App-header">
	          		<img src={falcon_heavy} className="App-logo" alt="logo" />
	        	</header>
	    	    <h1 className="App-title">Falcon Heavy Lift Off</h1>
	        </div>
		)
	}

}