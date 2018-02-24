import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";


export default class Navbar extends React.Component {

	render() {
		return (
			<div>
		      	<Helmet title="About | Falcon Heavy Azure Learning Project"/>
		        <header className="App-header">
		        	<h1> Falcon Heavy </h1>
		        	<div style={{padding: '50px', fontSize: '1.1rem'}}>
			        	<p>
				        	Falcon Heavy is a partially reusable super heavy-lift launch vehicle designed and manufactured by SpaceX. It is derived from the Falcon 9 vehicle and consists of a strengthened Falcon 9 first stage as a central core with two additional first stages as strap-on boosters. This increases the low Earth orbit (LEO) maximum payload to 63,800 kilograms (140,700 lb), compared to 22,800 kg (50,300 lb) for a Falcon 9 Full Thrust, 28,790 kg (63,470 lb) for Delta IV Heavy, 27,500 kg (60,600 lb) for the Space Shuttle and 140,000 kg (310,000 lb) for Saturn V. Falcon Heavy is the world's fourth-highest capacity rocket ever built, after Saturn V, Energia and N1, and the most powerful rocket in operation as of 2018.
				        </p>
				        <p>
							SpaceX conducted Falcon Heavy's maiden launch on February 6, 2018, at 3:45 p.m. EST (20:45 UTC). The rocket carried a Tesla Roadster belonging to SpaceX founder Elon Musk as a dummy payload.
				        </p>
				        <p>
							Falcon Heavy was designed to carry humans into space farther than ever before, especially to the Moon, Mars, and potentially to asteroids for mining, although as of February 2018, it is not planned to do the work necessary to obtain a US government certification for the launch vehicle to carry NASA astronauts.
						</p>
					</div>
	        	</header>
	    	    <h1 className="App-title">About Falcon Heavy</h1>
	        </div>
		)
	}

}