import React from 'react';

const Monogram = ({ color = '#FEF3C7', size = '100%' }) => {
	return (
		<svg 
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 200 250" 
			width={size} 
			height={size}
		>

			{/* Letter A */}
			<text 
				x="85" y="140" 
				fontFamily="'Kapakana', cursive" 
				fontSize="90" 
				fill={color} 
				textAnchor="middle"
			>
				A
			</text>

			{/* Letter D */}
			<text 
				x="125" y="165" 
				fontFamily="'Kapakana', cursive" 
				fontSize="90" 
				fill={color} 
				textAnchor="middle"
			>
				D
			</text>
		</svg>
	);
};

export default Monogram;
