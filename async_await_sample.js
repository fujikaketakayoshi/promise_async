const sendRequest = async () => {
	const url = "http://localhost/javascript_practice/promise_async/test.json";
	const response = await fetch(url);
	console.log(response.status);
	const data = await response.json();
	console.log(data);
	return(data);
};

//console.log(sendRequest());

const a = sendRequest();
console.log(a);