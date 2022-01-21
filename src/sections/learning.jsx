import { Card } from '../components/card';
// A section on the learning tools of the GEIGER Toolbox
const Learning = () => {
	return (
		<section id="learning">
			<h3>
				Wich LEARNING TOOLS are recommended to me by GEIGER&apos;s Toolbox?
			</h3>
			<div className="snapscroll">
				<Card
					title="Beginner Cyber Range Challenges"
					image="icons/beginner-cyber-range.svg"
					flippable>
					Here, the user is presented with an app on which phishing emails and
					normal emails are presented to the user in a simulated mailbox. The
					user can open the emails and is then asked to judge whether the email
					is legitimate or not. In a second step, users have to select the
					reasons why they think an email is not legitimate, e.g. suspicious
					header, sender, etc., in the form of a multiple-choice input.
				</Card>
				<Card
					title="Experiential Cybersecurity Escape Room"
					image="icons/escape-room.svg"
					flippable>
					The FHNW Cybersecurity Escape Room is a story-based virtual game on
					the topics of physical security, password hygiene, code security,
					information disposal, securing sensitive digital data and public
					oversharing / identity theft. Learners must follow various clues and
					solve various puzzles during the game. In a guided session, a trainer
					is required to provide game instructions and support and lead a
					discussion after the game.
				</Card>
				<Card
					title='"The value of the data" GDPR Quiz'
					image="icons/quiz.svg"
					flippable>
					FHNW&apos;s GDPR (General Data Protection Regulation) quiz &quot;The
					Value of Data&quot; is based on a storytelling and gamification
					approach adapted for MSE. It is realized in an online format of a
					story-based quiz on GDPR-relevant topics with a score that can be
					compared among the players at the end.
				</Card>
				<Card
					title='"Am I GDPR compliant?" GDPR Self-assessment'
					image="icons/self-assesment.svg"
					flippable>
					The FHNW &quot;Am I GDPR compliant?&quot; GDPR Self-assessment takes
					as its starting point a tool to help higher education institutions
					assess their GDPR compliance. FHNW has developed an easy-to-use tool
					for MSE holders to conduct a basic self-assessment and raise awareness
					of GDPR compliance as an important area of compliance. The tool aims
					to be easy to understand in both its use and the content delivered and
					should be viewed as an educational tool that does not provide legal
					advice, but helps its users identify areas in their current data
					policies that may need to be addressed and suggests seeking legal
					advice if the right course of action remains unclear.
				</Card>
				<Card
					title="CYSEC Mobile Learning"
					image="icons/mobile-learning.svg"
					flippable>
					The CYSEC functionality is based on micro-learning options that can be
					opened within the app. Small self-paced learning lessons on basic
					cybersecurity topics such as passwords, etc. open and initially
					present the user with multiple-choice questions as well as information
					slides. The user then clicks linearly through these slides until the
					lesson is completed.
				</Card>
				<Card title="GDPR chatbot" image="icons/chatbot.svg" flippable>
					The KPMG chatbot covers the topic of GDPR and can be used as a tool
					recommended by the GEIGER app. The GDPR chatbot is designed to provide
					answers to general questions about GDPR and to provide general
					information about GDPR terms and processes.
				</Card>
			</div>
		</section>
	);
};

export { Learning };
