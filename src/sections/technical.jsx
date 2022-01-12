import { Card } from '../components/card';

const Technical = () => {
	return (
		<section id="technical">
			<h3>
				Which technical tools are recommended to me by GEIGER&apos;s toolbox?
			</h3>
			<div className="snapscroll">
				<Card
					title="Incident Reporting Tool"
					image="icons/incident-reporting.svg"
					flippable>
					The Incident Reporting Tool reports when any incidents occur. The SME
					is given the opportunity to understand and report the incident. The
					tool comes in the form of a chatbot and virtual assistant for the
					employees. The tool helps the company and especially the employees to
					inform themselves about the extent of the incident and to initiate
					possible measures.
				</Card>
				<Card
					title="Betrugserkennung und Dokumentsammlung"
					image="icons/betrugserkennung.svg"
					flippable>
					The GEIGER Toolbox provides a real-time solution for fraud,
					transaction anomaly and suspicious activity detection based on natural
					language processing in emails. The tool also allows for automated
					extraction of valuable information from unstructured documents. It
					uses machine learning and artificial intelligence, which can
					understand customer relationships and detect fraud and risk, as well
					as other noticeable patterns.
				</Card>
				<Card
					title="Mobile Securiy"
					image="icons/mobile-security.svg"
					flippable>
					The mobile security tool protects employees&apos; smartphones from
					attacks or malicious software downloads from the network. This tool
					has already been successfully used in the business world and has
					excelled there.
				</Card>
			</div>
		</section>
	);
};

export { Technical };
