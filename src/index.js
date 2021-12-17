import { render } from 'react-dom';
import { Navbar } from './components/navbar';
import { Header } from './sections/header';
import { Learning } from './sections/learning';
import { Protect } from './sections/protect';
import { Risks } from './sections/risks';
import { Technical } from './sections/technical';

const App = () => {
	const sw = false;
	const one = (
		<>
			<Protect />
			<Technical />
			<Learning />
			<details>
				<summary>More information</summary>
				<Risks />
			</details>
		</>
	);

	const two = (
		<>
			<Risks />
			<details>
				<summary>More information</summary>
				<Protect />
				<Technical />
				<Learning />
			</details>
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
