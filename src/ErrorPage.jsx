import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	const errorMessages = [
		"Well, that's sad...",
		"Yer an error, Harry!",
		"${error.message}",
		"Oops!",
		"I'm sorry, the developer kinda sucks.",
		"Abort, Retry, Ignore, Chocolate.",
		"Oh no!",
		"It's not you, it's us. Okay, maybe it's you.",
		":(",
	];

	const errorDetails = [
		"Page not found. It's probably off somewhere, having a midlife crisis. Please try again later.",
		"Oops! Something went wrong. We're not sure what, but we blame it on the office gremlin. We'll get him back in his cage soon.",
		"The answer to life, the universe, and everything is missing. Please contact Deep Thought for assistance.",
		"You broke the internet. Please step away from the computer and take a deep breath. We'll try to fix things while you're gone.",
		"The devil made us do it. We're sorry, but he's a hard boss to say no to.",
		"Whoopsie! Looks like our website got a little too excited and tripped over itself. We'll get it back on its feet soon.",
		"We're sorry, but James Bond is currently using our servers for a top-secret mission. Please try again later.",
		"Danger, Will Robinson! Our website has encountered an error in the outer reaches of cyberspace. Please try again from a different planet.",
		"The internet has gone fishing. Please try again when it's back from vacation.",
	];

	return (
		<div
			id="error-page"
			className="tw-h-screen tw-w-screen tw-flex tw-items-center tw-justify-center tw-flex-col tw-text-center"
		>
			<h1 className="tw-text-5xl tw-font-bold tw-m-3">
				{errorMessages[Math.floor(Math.random() * errorMessages.length)]}
			</h1>
			<p>{errorDetails[Math.floor(Math.random() * errorDetails.length)]}</p>
			<p className="tw-text-sm tw-font-extralight">
				{error.status}: {error.statusText || error.message}
			</p>
			<Link to={"/"}>
				<button className="main-button tw-m-5">Home</button>
			</Link>
			<div
				style={{ position: "absolute", bottom: "10px" }}
				className="tw-text-xs tw-font-extralight tw-text-gray-500"
			>
				<Link>Psst! Click here for another error message!</Link>
			</div>
		</div>
	);
}
