import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

// Components
import { Home } from "./routes/Home";
import { Root } from "./layout/Root";
import { Navigation } from "./components/Navigation";
import { Logo } from "./components/Logo";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements([
			// <Route path="/" element={<Root />}>
			<Route>
				<Route index element={<Home />} />
				<Route path="nav" element={<Navigation />} />
			</Route>
		])
	);

	return <RouterProvider router={router} />;
}

export default App;
