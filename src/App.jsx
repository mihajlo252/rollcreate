import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

// Components
import { Home } from "./routes/Home";
import { Root } from "./layout/Root";
import { Characters } from "./routes/Characters";

function App() {
	const router = createHashRouter(
		createRoutesFromElements([
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route path="/characters" element={<Characters />} />
			</Route>
		])
	);

	return <RouterProvider router={router} />;
}

export default App;
