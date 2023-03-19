import logo from './logo.svg';
import "./App.scss";

function App() {
	return (
		<div className="tw-w-screen tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col">
			<div className="md:tw-flex md:tw-justify-around md:tw-w-full md:tw-flex-row-reverse">
				<div>Image Here</div>
				<div>Details Here</div>
			</div>
			<div>Other content here.</div>
		</div>
	);
}

export default App;
