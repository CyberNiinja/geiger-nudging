import { useState } from 'react';
import { render } from 'react-dom';
import { Navbar } from './components/navbar';
import { Cost } from './sections/cost';
import { Header } from './sections/header';
import { Learning } from './sections/learning';
import { Now } from './sections/now';
import { Protect } from './sections/protect';
import { Risks } from './sections/risks';
import { Technical } from './sections/technical';

const App = () => {
	const sw = false;
	const [more, setMore] = useState(false);
	const expander = (
		<div id="more" className="flex justify-center">
			<p onClick={() => setMore(true)}>Mehr Informationen</p>
		</div>
	);
	const one = (
		<>
			<Protect />
			<Technical />
			<Learning />
			{!more && expander}
			{more && (
				<>
					<Risks />
					<Cost />
					<Now />
				</>
			)}
		</>
	);

	const two = (
		<>
			<Risks />
			<Cost />
			<Now />
			{!more && expander}
			{more && (
				<>
					<Protect />
					<Technical />
					<Learning />
				</>
			)}
		</>
	);
	return (
		<>
			<Navbar />
			<div className="container">
				<Header />
				{sw ? one : two}
			</div>
		</>
	);
};

// eslint-disable-next-line no-undef
render(<App />, document.getElementById('root'));
