import React from 'react';

const index = () => {
	return (
		<>
			<h1>Here are the steps to deploy a React app using Netlify:</h1>
			<ul className='list-decimal mt-5'>
				<li>
					First, make sure you have a React repository on GitHub or GitLab.
				</li>
				<li>
					Create a Netlify account and login to the dashboard. Click the "New
					site from Git" button in the Netlify dashboard.
				</li>
				<li>
					Select your Git provider and choose your React repository. Set build
					settings. Make sure you setup the build command correctly, usually npm
					run
				</li>
				<li>
					build for React apps. Click "Deploy site" and wait for the build
					process to complete. After the build process is complete, Netlify will
					provide a
				</li>
				<li>
					temporary URL for your app. If you want to use a custom domain, you
					can set the domain in the "Domain settings" menu on the Netlify
					dashboard.
				</li>
				<li>Finished! Your React app is now deployed on Netlify</li>
			</ul>
		</>
	);
};

export default index;
