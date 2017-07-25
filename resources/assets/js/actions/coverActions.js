export function clickCoverSwitch(clicked) {
	return {
		type: "COVER_WORDS",
		data: clicked,
	};
}