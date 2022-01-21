import { Card } from '../components/card';

// A section on the risks that small business can be exposed to
const Risks = () => {
	return (
		<section id="risks">
			<h3>Which DANGERS am I exposed to?</h3>
			<div className="snapscroll" id="risk-scroll">
				<Card title="Compromised Credentials" image="icons/credentials.png">
					On the Darkweb whole lists of login data are published every now and
					then. That data is then used by attackers to gain unauthorized access
					to systems.
				</Card>
				<Card title="Phishing" image="icons/phishing.svg">
					Phishing is a form of social engineering used to steal user data, such
					as login and credit card information.
				</Card>
				<Card title="Cloud Misconfiguration" image="icons/cloud.png">
					Attackers use various common mistakes made during configuration of
					cloud systems to gain unauthorized access to cloud environments.
				</Card>
			</div>
		</section>
	);
};

export { Risks };
