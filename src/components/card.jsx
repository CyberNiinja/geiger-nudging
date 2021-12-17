import { useState } from 'react';

const Card = ({ title, image, children, styles, flippable }) => {
	const [flipped, flip] = useState(false);
	return (
		<div
			className={`card ${flippable ? 'hover' : ''} ${styles ? styles : ''}`}
			onClick={() => flip(!flipped)}>
			{(!flippable || !flipped) && (
				<>
					<img className="card-image" src={image}></img>
					<h4>{title}</h4>
				</>
			)}
			{(!flippable || flipped) && <p className="card-body">{children}</p>}
		</div>
	);
};

export { Card };
