import { Card } from '../components/card';

const Risks = () => {
	return (
		<section id="danger">
			<h3>Welchen Gefahren bin ich ausgesetzt?</h3>
			<div className="snapscroll">
				<Card
					title="Compromised Credentials"
					image="https://picsum.photos/300/200">
					Im Darkweb werden immer wieder ganze Listen von Login-Daten
					veröffentlicht. Diese Login-Daten werden dann von Angreiffern
					gebraucht um sich zugriff zu Systemen zu verschaffen.
				</Card>
				<Card title="Phishing" image="https://picsum.photos/300/200">
					Phishing ist eine Form von Social Engineering die gebraucht wird um
					Benutzerdaten, wie Login- und Kreditkarteninformationen, zu klauen.
				</Card>
				<Card
					title="Cloud Misconfiguration"
					image="https://picsum.photos/300/200">
					Angreiffer nutzen veschiedene oft gemachte fehler bei der
					Konfiguration von clouds, um sich unerlaubten Zugriff zu cloud
					environments zu verschaffen.
				</Card>
			</div>
		</section>
	);
};

export { Risks };
