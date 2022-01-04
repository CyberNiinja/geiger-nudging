import { Indicator } from '../components/indicator';

const Header = () => {
	return (
		<section id="header" className="flex space-between">
			<header>
				<h1>Cyber Risiko Indikator</h1>
				<h2>Abgestimmt auf Ihre Region und Branche</h2>
			</header>
			<main>
				<Indicator />
			</main>
		</section>
	);
};

export { Header };
