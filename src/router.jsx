import { createBrowserRouter } from "react-router-dom";

import Layout from "./features/Layout";
import Red from "./features/pages/Red";
import Blue from "./features/pages/Blue";
import Home from "./features/pages/Home";

const router = createBrowserRouter([
	{
		path: `/`,
		element: <Layout />,
		children: [
			{ path: `/`, element: <Home /> },
			{ path: `/red`, element: <Red /> },
			{ path: `/blue`, element: <Blue /> },
		],
	},
]);

export default router;
