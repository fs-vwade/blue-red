import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/red" element={<Red />} />
			<Route path="/blue" element={<Blue />} />
			{/*<Route />*/}
		</Routes>
	);
}

export default App;
