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
import { Create } from "./routes/Create";
import { Campaigns } from "./routes/Campaigns";
import { SignUp } from "./routes/SignUp";
import { SignIn } from "./routes/SignIn";

function App() {
	const router = createHashRouter(
		createRoutesFromElements([
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/create" element={<Create />} />
				<Route path="/campaigns" element={<Campaigns />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
			</Route>
		])
	);

	return <RouterProvider router={router} />;
}

export default App;
