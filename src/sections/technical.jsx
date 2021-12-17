import { Card } from '../components/card';

const Technical = () => {
	return (
		<section id="technical">
			<h3>
				Welche technischen Tools werden mir von der Toolbox von GEIGER
				empfohlen?
			</h3>
			<div className="snapscroll">
				<Card
					title="Incident Reporting Tool"
					image="icons/incident-reporting.png"
					flippable>
					Das Incident Reporting Tool meldet, wenn irgendwelche Vorfälle
					aufkommen. Dabei wird dem KMU die Möglichkeit geboten den Vorfall zu
					verstehen und zu melden. Das Tool ist in Form eines Chatbots und
					virtuell Assistent für die Mitarbeitenden daherkommen. Dabei hilft das
					Tool dem Unternehmen und vor allem den Mitarbeitenden sich über das
					Ausmass des Vorfalls zu informieren und eventuelle Massnahmen
					einzuleiten.
				</Card>
				<Card
					title="Betrugserkennung und Dokumentsammlung"
					image="icons/betrugserkennung.png"
					flippable>
					Die GEIGER Toolbox bietet eine Echtzeitlösung für die Erkennung von
					Betrug, Transaktionsanomalien und verdächtigen Aktivitäten auf der
					Grundlage von der Verarbeitung natürlicher Sprache in E-Mails. Das
					Tool erlaubt es zudem eine automatisierte Extraktion wertvoller
					Informationen aus unstrukturierten Dokumenten. Dabei werden
					Maschinlearning und Künstliche Intelligenz verwendet, welche die
					Kundenbeziehungen verstehen können und Betrug und Risiken sowie andere
					auffällige Muster erkennen können.
				</Card>
				<Card
					title="Mobile Securiy"
					image="icons/mobile-security.png"
					flippable>
					Das Mobile Security Tool schützt das Smartphone der Mitarbeitenden vor
					Angriffen oder vor Downloads schädlicher Software, welche aus dem Netz
					getätigt werden. Dieses Tool wurde bereits erfolgreich in der
					Business-Welt eingesetzt und konnte sich dort auszeichnen.
				</Card>
			</div>
		</section>
	);
};

export { Technical };
