import React, { useEffect, useState } from "react";
import {
	SiUnity,
	SiReact,
	SiAngular,
	SiJavascript,
	SiCsharp,
	SiPython,
	SiAmazonaws,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Featured from "../Featured/Featured";
import Typewriter from "typewriter-effect";

export default function Home() {
	const [counter, setCounter] = useState(-2);
	const incrementCounter = () => {
		setCounter((c) => (c + 1) % 6);
	};

	useEffect(() => {
		console.log(counter);
	});

	return (
		<>
			<div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col">
				<div className="md:tw-flex md:tw-justify-around md:tw-items-center md:tw-w-full md:tw-flex-row-reverse">
					<div className="md:tw-flex tw-justify-center tw-relative tw-hidden">
						<div
							className={`${counter == 0 ? "tw-opacity-100" : "tw-opacity-0"}`}
						>
							<iframe
								src="https://giphy.com/embed/SIRw6DmCXYbqRhTdL2"
								width="440"
								height="318"
								frameBorder="0"
								class="giphy-embed"
								// allowFullScreen
							></iframe>
						</div>
						<div
							className={`${counter == 2 ? "tw-opacity-100" : "tw-opacity-0"}`}
							style={{ position: "absolute", top: "0", left: "0" }}
						>
							<iframe
								src="https://giphy.com/embed/ZDTbix65Me1YDNLDF3"
								width="372"
								height="440"
								frameBorder="0"
								class="giphy-embed"
								// allowFullScreen
							></iframe>
						</div>
						<div
							className={`${counter == 4 ? "tw-opacity-100" : "tw-opacity-0"}`}
							style={{ position: "absolute", top: "0", left: "0" }}
						>
							<iframe
								src="https://giphy.com/embed/U7IxSYwucpNX9vD0aj"
								width="440"
								height="440"
								frameBorder="0"
								class="giphy-embed"
								// allowFullScreen
							></iframe>
						</div>
					</div>
					<div
						style={{ minWidth: "400px" }}
						className="tw-flex tw-flex-col tw-items-center md:tw-items-start"
					>
						<div>
							<img
								src="images/home-pic.jpg"
								className="tw-w-64 tw-h-64 tw-rounded-full tw-border-2 tw-border-sky-400"
							></img>
						</div>
						<div className="tw-text-2xl tw-flex tw-items-center tw-font-extralight tw-text-center md:tw-text-start">
							<span className="tw-mr-2">I'm a</span>
							<span className="tw-font-bold tw-text-3xl tw-text-sky-400">
								<Typewriter
									options={{
										// strings: ['Hello', 'World'],
										autoStart: true,
										loop: true,
									}}
									onInit={(typewriter) => {
										typewriter
											.typeString("Game Developer.")
											.callFunction(() => {
												incrementCounter();
											})
											.pauseFor(2500)
											.deleteAll()
											.typeString("Web Developer.")
											.callFunction(() => {
												incrementCounter();
											})
											.pauseFor(2500)
											.deleteAll()
											.typeString("Software Engineer!")
											.callFunction(() => {
												incrementCounter();
											})
											.pauseFor(2500)
											.deleteAll()
											.start();
									}}
								/>
							</span>
						</div>
						<div className="tw-text-3xl tw-py-2 tw-flex tw-text-gray-700">
							<div
								className={`tw-flex tw-justify-center seperate-icons md:tw-justify-start tw-transition-colors ${
									(counter == 0 || counter == 4) && "tw-text-white"
								}`}
							>
								<SiUnity></SiUnity>
								<SiCsharp></SiCsharp>
								{/* <SiReact></SiReact>
								<SiAngular></SiAngular>
								<SiJavascript></SiJavascript>
								<SiPython></SiPython>
								<SiAmazonaws></SiAmazonaws> */}
							</div>
							<div
								className={`tw-flex tw-justify-center seperate-icons md:tw-justify-start tw-transition-colors ${
									(counter == 2 || counter == 4) && "tw-text-white"
								}`}
							>
								{/* <SiUnity></SiUnity> */}
								{/* <SiCsharp></SiCsharp> */}
								<SiReact></SiReact>
								<SiAngular></SiAngular>
								<SiJavascript></SiJavascript>
								{/* <SiPython></SiPython> */}
								{/* <SiAmazonaws></SiAmazonaws> */}
							</div>
							<div
								className={`tw-flex tw-justify-center seperate-icons md:tw-justify-start tw-transition-colors ${
									counter == 4 && "tw-text-white"
								}`}
							>
								{/* <SiUnity></SiUnity> */}
								{/* <SiCsharp></SiCsharp> */}
								{/* <SiReact></SiReact> */}
								{/* <SiAngular></SiAngular> */}
								{/* <SiJavascript></SiJavascript> */}
								<SiPython></SiPython>
								<SiAmazonaws></SiAmazonaws>
							</div>
						</div>
						<div className="tw-mt-8">
							<Link to={"/projects"}>
								<button className="long-button tw-text-xl tw-font-semibold">
									My Projects
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
