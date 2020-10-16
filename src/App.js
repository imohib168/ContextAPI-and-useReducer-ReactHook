import React, {useState} from 'react';
import Parent from './Parent.js'
import ValueContext from './ValueContext.js'
import './App.css';

function App() {
	let value = useState(1);
	return (
		<ValueContext.Provider value={value}>
			<div className="App">
				App Component
		  		<Parent />
			</div>
		</ValueContext.Provider>

	);
}

export default App;
