import { Card } from '../components/card';

const Risks = () => {
	return (
		<section id="risks">
			<h3>Which dangers am I exposed to?</h3>
			<div className="snapscroll">
				<Card
					title="Compromised Credentials"
					image="icons/credentials.png"
					styles="no-shadow">
					On the Darkweb whole lists of login data are published every now and
					then. That data is then used by attackers to gain unauthorized access
					to systems.
				</Card>
				<Card title="Phishing" image="icons/phishing.svg" styles="no-shadow">
					Phishing is a form of social engineering used to steal user data, such
					as login and credit card information.
				</Card>
				<Card
					title="Cloud Misconfiguration"
					image="icons/cloud.png"
					styles="no-shadow">
					Attackers use various common mistakes made during configuration of
					cloud systems to gain unauthorized access to cloud environments.
				</Card>
			</div>
		</section>
	);
};

export { Risks };
