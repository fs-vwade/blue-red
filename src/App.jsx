import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Red from "./features/pages/Red";
import Blue from "./features/pages/Blue";
import Home from "./features/pages/Home";

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
