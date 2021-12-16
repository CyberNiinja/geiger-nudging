import { render } from 'react-dom';
import { Navbar } from './components/navbar';
import { Header } from './articles/header';
import { Risks } from './articles/risks';

const App = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Risks />
		</>
	);
};

// eslint-disable-next-line no-undef
render(<App />, document.getElementById('root'));
