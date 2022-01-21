import { useState } from 'react';

// A flippable Card
const Card = ({ title, image, children, styles, flippable }) => {
	const [flipped, flip] = useState(false);
	return (
		<div
			className={`card ${flippable ? 'hover' : ''} ${
				flipped ? 'justify-start' : ''
			} ${styles ? styles : ''}`}
			onClick={() => flip(!flipped)}>
			{(!flippable || !flipped) && (
				<>
					<img className="card-image" src={image}></img>
					<h4 className="card-title">{title}</h4>
				</>
			)}
			{(!flippable || flipped) && <p className="card-body">{children}</p>}
		</div>
	);
};

export { Card };
