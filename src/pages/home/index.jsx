import React from 'react';
import Hero from '../../assets/hero.jpg';

const index = () => {
	return (
		<div className='grid md:grid-cols-2 text-center md:text-start justify-center gap-5 items-center h-[500px]'>
			<div className='flex flex-col'>
				<h1 className='font-bold text-lg'>
					<i>Hello, 👋</i> I'm Sigit Wahyudi
				</h1>
				<h2 className='font-bold text-xl'>Software Developer</h2>
				<p className='mt-5 text-base font-medium'>
					Hello, I'm <strong>Sigit Wahyudi</strong>, a student of the
					Informatics Study Program at the Muhammadiyah University of Surakarta.
					I like programming since 2nd grade of high school until now I have
					been studying web programming for more than 3 years and now I am
					focusing on developing web using JavaScript language. <br />
					for more click this link to view my personal website{' '}
					<a
						href='https://sigitwahyu.my.id'
						className='text-blue-600'
						target='_blank'
						rel='noreferrer'>
						here
					</a>
				</p>
			</div>
			<div className=''>
				<img src={Hero} className='w-72 float-right hidden md:block' alt='' />
			</div>
		</div>
	);
};

export default index;
