import { Card } from '../components/card';

const Protect = () => {
	return (
		<section id="protect">
			<h3>Wen schützt die GEIGER Toolbox?</h3>
			<div className="flex space-around">
				<Card
					title="Ihre Mitarbeiter"
					image="icons/employee.png"
					styles="no-shadow"></Card>
				<Card
					title="Ihre Devices"
					image="icons/devices.png"
					styles="no-shadow"></Card>
			</div>
		</section>
	);
};

export { Protect };
