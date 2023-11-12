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

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements([
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
			</Route>,
		])
	);

	return <RouterProvider router={router} />;
}

export default App;
