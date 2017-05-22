const api = (store) => (next) => (action) => {
	console.log("action fired", action);
	next(action);
}

//https://medium.com/@meagle/understanding-87566abcfb7a
//Middlware...
//First it captures the previous state
//The action is dispatched to the next middleware function
//All downstream middleware functions in the chain are invoked
//The reducer functions in the store are called with the action payload
//The middleware then gets the resulting next state

//https://www.youtube.com/watch?v=DJ8fR0mZM44
//These are just examples

// const error = (store) => (next) => (action) => {
// 	try {
// 		next(action);
// 	}
// 	catch (e) {
// 		console.log("Error found", action);
// 	}
// }
//const middleware = applyMiddleware(api, error);

//Basically