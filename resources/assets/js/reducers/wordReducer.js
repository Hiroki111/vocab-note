export default function wordReducer(state={
	words: [],
	sortBy: "FTN",
	coverAll: true,
},action){
	switch(action.type){
		case "FETCH_WORDS":{
			return{
				...state,
				words:action.data,
			}
			break;
		}
		case "FETCH_WORDS_ERROR":{
			return{
				...state,
				words:[],
			}
			break;
		}
		case "ADD_WORD":{
			return {
				...state,
				words:[...state.words, action.data],
			}
			break;
		}
		case "SORT_WORDS":{
			return {
				...state,
				sortBy:action.data,
			}
			break;
		}
		case "COVER_WORDS":{
			return {
				...state,
				coverAll:action.data,
			}
			break;
		}
	}
	return state;
}