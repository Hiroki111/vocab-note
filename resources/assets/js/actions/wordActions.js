export function addWord(word){
	return{
		type:"ADD_WORD",
		data:word,
	};
}

export function fetchWords(){
	return function(dispatch){
		fetch('/api/words')
		.then((response) => {
			if(response.ok){
				response.json().then((jsonResponse) => {
					dispatch({type:"FETCH_WORDS",data:jsonResponse});
				});
			}else{
				throw new Error(response);
			}
		}).catch((error)=>{
			console.log("error",error);
			dispatch({type:"FETCH_WORDS_ERROR",data:error});
		});
	}
}