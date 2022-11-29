import React, { useState } from 'react';
import PasswordMeter from './PasswordMeter';
import './App.css';

function App() {
	const [password, setPassword] = useState('');

	return (
		<div className="App">
			<div className="meter">
				<input type="password" onChange={(e) => setPassword(e.target.value)} />
			</div>
			<PasswordMeter password={password} />
		</div>
	);
}

export default App;
