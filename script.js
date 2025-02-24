function firstNonRepeatedChar(str) {
 if(typeof str !== 'string') 
	 return "";

	const count={};

	for(let a of str){
		count[a] =(count[a] || 0)+1;
	}

	for(let a of str)
		{
			if(count[a]===1)
				return a;
		}
	return "";
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
