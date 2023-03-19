import React from "react";

export default function Featured() {
	return (
		<div className="tw-flex tw-flex-col tw-justify-center">
			<div className="tw-text-center tw-text-2xl tw-font-bold">
				Featured Items
			</div>
			<div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
			</div>
		</div>
	);
}
