function firstNonRepeatedChar(str) {
 if(typeof str !== 'string' || str.length === 0) 
	 return "";

	count count={};

	for(let a of str){
		count[a] =(const[a] || 0)+1;
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
