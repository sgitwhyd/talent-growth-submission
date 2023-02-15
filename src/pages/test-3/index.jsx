import React, { useState } from 'react';

const index = () => {
	const [name, setName] = useState('');

	const handleOnchange = (e) => {
		const { value } = e.target;
		setName(value);
	};

	const checkName = (word) => {
		const firstLetter = word[0].toLowerCase();
		if (firstLetter >= 'a' && firstLetter <= 'd') {
			return `${name}  in a first group`;
		} else if (firstLetter >= 'e' && firstLetter <= 'i') {
			return `${name}  in a second group`;
		} else {
			return `${name}  in a last group`;
		}
	};

	return (
		<div className='mt-8'>
			<h1>Check Name</h1>
			<form>
				<div className='mb-3 xl:w-96'>
					<label
						htmlFor='name'
						className='form-label inline-block mb-2 text-gray-700'>
						Name
					</label>
					<input
						id='name'
						name='name'
						type='text'
						value={name}
						className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
						placeholder='Student Name'
						onChange={handleOnchange}
						required
					/>
				</div>
			</form>

			<div className='mt-5'>
				<h1>Output</h1>
				{name ? (
					<>
						<p>Name = {name}</p>
						<p>Output = {checkName(name)}</p>
					</>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default index;
