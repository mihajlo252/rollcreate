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
import { Profile } from "./routes/Profile";
import { Create } from "./routes/Create";
import { Campaigns } from "./routes/Campaigns";
import { SignUp } from "./routes/SignUp";
import { SignIn } from "./routes/SignIn";
import { Character } from "./components/Character/Character";

function App() {
	const router = createHashRouter(
		createRoutesFromElements([
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/characters/:characterId" element={<Character />} />
				<Route path="/create" element={<Create />} />
				<Route path="/campaigns" element={<Campaigns />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
			</Route>,
		])
	);

	return <RouterProvider router={router} />;
}

export default App;
