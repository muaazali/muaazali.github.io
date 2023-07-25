import logo from './logo.svg';
import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
    <div className="tw-w-screen tw-h-screen tw-overflow-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <p className="tw-text-center tw-m-5 tw-text-sm tw-text-gray-500">
        Website is still under construction.
      </p>
    </div>
  );
}

export default App;
