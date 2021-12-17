import { Indicator } from '../components/indicator';

const Header = () => {
	return (
		<section id="header" className="flex space-between">
			<header>
				<h1>Cyber Risiko Indikator</h1>
				<h2>Abgestimmt auf Ihre Region und Branche</h2>
			</header>
			<main className="flex col align-center">
				<Indicator />
				<select id="branchen" className="drop">
					<option>Gesundheitsbranche</option>
					<option>Finanzbranche</option>
					<option>Landwirtschaft</option>
				</select>
				<select id="regionen" className="drop">
					<option>Deutschschweiz</option>
					<option>Tessin</option>
					<option>Romandie</option>
				</select>
			</main>
		</section>
	);
};

export { Header };
