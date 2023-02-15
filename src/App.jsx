import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/index';
import Test2 from './pages/test-2/index';
import Test3 from './pages/test-3/index';

function App() {
	return (
		<>
			<Navbar />
			<div className='w-full md:max-w-4xl mx-auto'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='task-1' element={<Test2 />} />
					<Route path='task-2' element={<Test2 />} />
					<Route path='task-3' element={<Test3 />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
