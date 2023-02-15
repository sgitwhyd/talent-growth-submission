import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/index';
import Test1 from './pages/test-1/index';
import Test2 from './pages/test-2/index';
import Test3 from './pages/test-3/index';
import Test4 from './pages/test-4/index';

function App() {
	return (
		<>
			<Navbar />
			<div className='w-full md:max-w-4xl mx-auto'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='task-1' element={<Test1 />} />
					<Route path='task-2' element={<Test2 />} />
					<Route path='task-3' element={<Test3 />} />
					<Route path='task-4' element={<Test4 />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
