export default function loginReducer(state = {
	token: "",
}, action) {
	switch (action.type) {
		case "SET_TOKEN":
			{
				return {
					...state,
					token: action.data,
				}
				break;
			}
		case "LOGOUT":
			{
				return {
					...state,
					token: "",
				}
			}
			break;
	}
	return state
}