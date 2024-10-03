import { RouterProvider } from "react-router-dom";
//import { useState } from "react";

import router from "./router";

export default function App() {
	return <RouterProvider router={router} />;
}
