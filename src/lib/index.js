import React from 'react';

const SIZE = '18px';
const COLOR = '#000000';
const WEIGHT = '2';
const STYLE = 'round';

/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set color size
 * @params {weight} set color weight
 * @params {style} set color style
 */
const IconArrowUp = ({ color, size, weight, style }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size ? size : SIZE}
			height={size ? size : SIZE}
			viewBox='0 0 24 24'
			fill='none'
			stroke={color ? color : COLOR}
			strokeWidth={weight ? weight : WEIGHT}
			strokeLinecap={style ? style : STYLE}
			strokeLinejoin={style ? style : STYLE}
		>
			<path d='M12 19V6M5 12l7-7 7 7' />
		</svg>
	);
};

module.exports = { IconArrowUp };
