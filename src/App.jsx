import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Card from './components/Card';

function App() {
	const items = useFetch('http://localhost:7000/burgers', []);

	return (
		<>
			<div className="cards">
				{items.map((item) => (
					<Card
						key={item.id}
						name={item.name}
						image={item.image}
						category={item.category}
						description={item.description}
					/>
				))}
			</div>
		</>
	);
}

export default App;

// import './App.css';
// import './hooks/useFetch';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Button from './components/button.jsx';

// function App() {
// 	return (
// 		<>

// 			const items = useFetch('http://localhost:7000/burgers', []);
// 		</>
// 	);
// }

// export default App;
