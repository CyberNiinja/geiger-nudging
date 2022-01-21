import { useState } from 'react';
import { render } from 'react-dom';
import { Cost } from './sections/cost';
import { Header } from './sections/header';
import { Learning } from './sections/learning';
import { Now } from './sections/now';
import { Protect } from './sections/protect';
import { Risks } from './sections/risks';
import { Technical } from './sections/technical';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	// Proposal for Implementation of Stat Tracking
	// on page load call API
	// API will create user session & save timestamp of session creation
	// when Download button is clicked API is called again and session is marked as "succesful"
	// when session is cancelled without clicking of download button session is marked as "failed"
	// that can be the same API as the one that provides the RISK indication
	// FOLLOWING Metrics should be recorded:
	// how much impact does the indicator result have on conversion rate.
	// how much impact motivation level have on conversion rate?

	const [more, setMore] = useState(false);
	const expander = (
		<div id="more" className="flex justify-center">
			<p onClick={() => setMore(true)}>More information</p>
		</div>
	);

	//The variant for integrated regulation persona
	const one = (
		<>
			<Protect />
			<Technical />
			<Learning />
		</>
	);
	// The variant for externally regulated behaviour persona
	const two = (
		<>
			<Risks />
			<Cost />
			<Now />
		</>
	);

	// --- Display --
	// Route based switching for variants
	return (
		<Router>
			<div id="navbar">
				<div id="navbar-content">
					<a href="/geiger-nudging/#/norm" id="logo">
						<img
							src="31072020_geiger-logo_rgb.svg"
							alt="logo"
							height={50}></img>
					</a>
					<a
						href="https://project.cyber-geiger.eu/"
						id="navbar-btn"
						className="btn">
						Download Toolbox
					</a>
				</div>
			</div>
			<div className="container">
				<Header />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								{one}
								{!more && expander}
								{more && two}
							</>
						}
					/>
					<Route
						path="/norm"
						element={
							<>
								{two}
								{!more && expander}
								{more && one}
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
};

// eslint-disable-next-line no-undef
render(<App />, document.getElementById('root'));
