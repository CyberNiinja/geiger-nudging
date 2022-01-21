import { Card } from '../components/card';
// A section on who the Toolbox tries to protect
const Protect = () => {
	return (
		<section id="protect">
			<h3>Who does the GEIGER Toolbox protect?</h3>
			<div className="flex space-around">
				<Card
					title="Your employees"
					image="icons/employee.png"
					styles="no-shadow"></Card>
				<Card
					title="Your devices"
					image="icons/devices.png"
					styles="no-shadow"></Card>
			</div>
		</section>
	);
};

export { Protect };
