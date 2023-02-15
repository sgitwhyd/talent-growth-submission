import React from 'react';
import flowcart from '../../assets/flowchart.jpg';
import pseudocode from '../../assets/pseudocode.png';

const index = () => {
	return (
		<div className='mt-8'>
			<h1>Flowcart</h1>
			<img src={flowcart} className='w-[600px]' alt='' />
			<h1>Pseudocode</h1>
			<img src={pseudocode} className='w-[600px]' alt='' />
		</div>
	);
};

export default index;
