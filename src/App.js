import logo from './logo.svg';
import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div className="tw-w-screen tw-h-screen">
			<Navbar></Navbar>
			<Outlet></Outlet>
		</div>
	);
}

export default App;
