import React from "react";
import {
	SiUnity,
	SiReact,
	SiAngular,
	SiJavascript,
	SiCsharp,
	SiPython,
	SiAmazonaws,
} from "react-icons/si";

export default function Home() {
	return (
		<div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col">
			<div className="md:tw-flex md:tw-justify-around md:tw-items-center md:tw-w-full md:tw-flex-row-reverse">
				<div>
					<img
						src="images/home-pic.jpg"
						className="tw-w-64 tw-h-64 tw-rounded-full"
					></img>
				</div>
				<div>
					<div className="tw-text-2xl tw-font-extralight">
						<span>I'm a </span>
						<span className="tw-font-bold tw-text-3xl tw-text-sky-400">
							Software Engineer
						</span>
					</div>
					<div className="tw-text-3xl tw-py-2">
						<div className="tw-flex tw-justify-center seperate-icons md:tw-justify-start">
							<SiUnity></SiUnity>
							<SiCsharp></SiCsharp>
							{/* </div>
						<div className="tw-flex seperate-icons tw-mt-2"> */}
							<SiReact></SiReact>
							<SiAngular></SiAngular>
							<SiJavascript></SiJavascript>
							<SiPython></SiPython>
							<SiAmazonaws></SiAmazonaws>
						</div>
					</div>
					<div>Portfolio stuff here.</div>
				</div>
			</div>
		</div>
	);
}
