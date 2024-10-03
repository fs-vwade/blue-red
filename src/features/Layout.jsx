import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<header>
				<nav>
					<NavLink to={`/blue`}>Blue</NavLink>
					<NavLink to={`/red`}>Red</NavLink>
					<NavLink to={`/`}>Home</NavLink>
				</nav>
			</header>
			<Outlet />
		</>
	);
}
