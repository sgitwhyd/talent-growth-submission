import React, { useState } from 'react';

const index = () => {
	const [recent, setRecent] = useState(
		JSON.parse(localStorage.getItem('recent')) || []
	);
	const [data, setData] = useState({
		name: '',
		grade: '',
	});

	const { name, grade } = data;

	const handleOnchange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const checkGrade = (grade) => {
		if (grade <= 0 || grade > 100) {
			return 'invalid';
		}

		if (grade >= 80 && grade <= 100) {
			return 'A';
		} else if (grade >= 65 && grade <= 79) {
			return 'B';
		} else if (grade >= 50 && grade <= 64) {
			return 'C';
		} else if (grade >= 35 && grade <= 49) {
			return 'D';
		} else if (grade >= 1 && grade <= 34) {
			return 'E';
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (localStorage.getItem('recent') === null) {
			localStorage.setItem('recent', JSON.stringify([data]));
		} else {
			const recent = JSON.parse(localStorage.getItem('recent'));
			recent.push(data);
			localStorage.setItem('recent', JSON.stringify(recent));
		}

		setData({
			name: '',
			grade: '',
		});
	};

	return (
		<div className='mt-8'>
			<h1>Check Grade</h1>
			<form onSubmit={handleSubmit}>
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
				<div className='mb-3 xl:w-96'>
					<label
						htmlFor='grade'
						className='form-label inline-block mb-2 text-gray-700'>
						Grade
					</label>
					<input
						value={grade}
						id='grade'
						type='text'
						name='grade'
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
						placeholder='Student Grade'
						onChange={handleOnchange}
						required
					/>
				</div>
				<button
					type='submit'
					className='bg-blue-500 py-2 rounded-md px-4 text-white'>
					Submit
				</button>
			</form>

			<div className='mt-5'>
				<div className=''>
					<h1>Newest</h1>
					{data ? (
						<>
							{data.name || data.grade ? (
								<>
									<p>nama = {data.name}</p>
									<p> nilai = {data.grade}</p>
								</>
							) : (
								''
							)}
							{data.grade ? (
								<p>
									Output =
									{checkGrade(data.grade) === 'invalid'
										? ' Nilai Invalid'
										: ` Nilai ${data.name} mendapatkan nilai
									${checkGrade(data.grade)}`}
								</p>
							) : (
								''
							)}
						</>
					) : (
						''
					)}
				</div>
				{recent && (
					<h1 className='mt-5'>
						Recent <br />
						<span className='text-xs text-red-500'>
							*reload to know the newest
						</span>
					</h1>
				)}

				{recent.length > 0
					? recent.map((item, index) => (
							<div key={index} className='mb-3'>
								<p>Name = {item.name}</p>
								<p> nilai = {item.grade}</p>
								<p>
									Ouput= Nilai {item.name} mendapatkan nilai{' '}
									{checkGrade(item.grade)}
								</p>
							</div>
					  ))
					: ''}
			</div>
		</div>
	);
};

export default index;
