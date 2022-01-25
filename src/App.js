import { Route, Routes, useLocation } from "react-router-dom";
import Campgrounds from "./Components/Campgrounds";
import Edit from "./Components/Edit";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Page404 from "./Components/Page404";
import PrivateRoutes, {
	PrivateRoutesLoggedOut,
} from "./Components/PrivateRoutes";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import "./Css/App.css";

function App() {
	const location = useLocation();
	return (
		<>
			<div
				className={
					location.pathname.slice(1) === ""
						? "Home"
						: location.pathname.slice(1)
				}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Campgrounds" element={<Campgrounds />} />
					<Route
						path="/Profile"
						element={
							<PrivateRoutes>
								<Profile />
							</PrivateRoutes>
						}
					/>
					<Route
						path="/Edit"
						element={
							<PrivateRoutes>
								<Edit />
							</PrivateRoutes>
						}
					/>
					<Route
						path="/Login"
						element={
							<PrivateRoutesLoggedOut>
								<Login />
							</PrivateRoutesLoggedOut>
						}
					/>
					<Route
						path="/Register"
						element={
							<PrivateRoutesLoggedOut>
								<Register />
							</PrivateRoutesLoggedOut>
						}
					/>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
