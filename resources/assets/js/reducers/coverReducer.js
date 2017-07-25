export default function coverReducer(state = {
	coverAll: true,
}, action) {
	switch (action.type) {
		case "COVER_WORDS":
			{
				return {
					...state,
					coverAll: action.data,
				}
				break;
			}
	}
	return state;
}