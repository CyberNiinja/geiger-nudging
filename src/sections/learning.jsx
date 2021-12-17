import { Card } from '../components/card';

const Learning = () => {
	return (
		<section id="learning">
			<h3>
				Welche learning Tools werden mir von der Toolbox von GEIGER empfohlen?
			</h3>
			<div className="snapscroll">
				<Card
					title="Beginner Cyber Range Challenges"
					image="icons/beginner-cyber-range.png"
					flippable>
					Hierbei wird dem Benutzer ein App präsentiert auf welchem dem Benutzer
					Phishing-E-Mails und normale E-Mails in einem simulierten Postfach
					präsentiert werden. Der Benutzer kann die E-Mails öffnen und wird dann
					aufgefordert, zu beurteilen, ob die E-Mail legitim ist oder nicht. In
					einem zweiten Schritt müssen die Benutzer in Form einer
					Multiple-Choice-Eingabe die Gründe auswählen, warum sie eine E-Mail
					für nicht legitim halten, z. B. verdächtige Kopfzeile, Absender usw.
				</Card>
				<Card
					title="Experiential Cybersecurity Escape Room"
					image="icons/escape-room.png"
					flippable>
					Der FHNW Cybersecurity Escape Room2 ist ein storybasiertes virtuelles
					Spiel zu den Themen physische Sicherheit, Passworthygiene,
					Codesicherheit, Informationsentsorgung, Sicherung sensibler digitaler
					Daten und Public Oversharing/Identitätsdiebstahl. Die Lernenden müssen
					während des Spiels verschiedenen Hinweisen folgen und verschiedene
					Rätsel lösen. In einer geführten Sitzung wird ein Trainer benötigt,
					der Spielanweisungen und Unterstützung gibt und nach dem Spiel eine
					Diskussion führt.
				</Card>
				<Card
					title='"The value of the data" GDPR Quiz'
					image="icons/quiz.png"
					flippable>
					Das GDPR-Quiz (General Data Protection Regulation) der FHNW &quot;Der
					Wert der Daten&quot; basiert auf einem für KKU angepassten
					Storytelling- und Gamification-Ansatz. Es wird in einem Online-Format
					eines storybasierten Quiz zu GDPR-relevanten Themen mit einer
					Punktzahl realisiert, die am Ende unter den Spielern verglichen werden
					kann.
				</Card>
				<Card
					title='"Am I GDPR compliant?" GDPR Self-assessment'
					image="icons/self-assesment.png"
					flippable>
					Die FHNW &quot;Bin ich GDPR-konform?&quot; GDPR Self-assessment geht
					von einem Tool aus, das Hochschulen bei der Beurteilung ihrer
					GDPR-Compliance unterstützt. Die FHNW hat ein einfach zu bedienendes
					Tool für MSE-Inhaber entwickelt, um eine grundlegende
					Selbstbeurteilung durchzuführen und das Bewusstsein für die
					GDPR-Compliance als wichtigen Bereich der Compliance zu schärfen. Das
					Tool zielt darauf ab, sowohl in der Anwendung als auch im gelieferten
					Inhalt leicht verständlich zu sein und ist als Bildungsinstrument zu
					betrachten, das keine Rechtsberatung bietet, sondern seinen Nutzern
					hilft, Bereiche in ihren aktuellen Datenrichtlinien zu identifizieren,
					die möglicherweise angegangen werden müssen, und vorschlägt,
					Rechtsberatung in Anspruch zu nehmen, wenn der richtige Weg des
					Handelns unklar bleibt.
				</Card>
				<Card
					title="CYSEC Mobile Learning"
					image="icons/mobile-learning.png"
					flippable>
					Die CYSEC-Funktionalität basiert auf Mikro-Lernoptionen, die innerhalb
					der App geöffnet werden können. Kleine selbstgesteuerte Lernlektionen
					zu grundlegenden Cybersicherheitsthemen wie Passwörtern usw. öffnen
					sich und präsentieren dem Nutzer zunächst Multiple-Choice-Fragen sowie
					Informationsfolien. Der Nutzer klickt sich dann linear durch diese
					Folien, bis die Lektion beendet ist.
				</Card>
				<Card title="GDPR chatbot" image="icons/chatbot.png" flippable>
					Der KPMG-Chatbot deckt das Thema GDPR ab und kann als ein von der
					GEIGER-App empfohlenes Tool verwendet werden. Der GDPR-Chatbot ist so
					konzipiert, dass er Antworten auf allgemeine Fragen zu GDPR gibt und
					allgemeine Informationen zu GDPR-Begriffen und -Prozessen
					bereitstellt.
				</Card>
			</div>
		</section>
	);
};

export { Learning };
