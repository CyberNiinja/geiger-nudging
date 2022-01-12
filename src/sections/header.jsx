import { Indicator } from '../components/indicator';

const Header = () => {
	return (
		<section id="header" className="flex space-between">
			<header>
				<h1>Cyber Risk Indicator</h1>
				<h2>Tailored to your region and trade</h2>
				<p>Get your personalized risk assessment now!</p>
				<div id="download-btn">
					<a href="https://project.cyber-geiger.eu/" className="btn">
						Download Toolbox
					</a>
				</div>
			</header>
			<main>
				<Indicator />
			</main>
		</section>
	);
};

export { Header };
