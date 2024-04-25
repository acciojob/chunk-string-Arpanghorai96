function stringChop(str, size) {
  // your code here
	
	if(str==null)
		return [];
	
	let i=0;
	let arr=[];
	while(i<str.length)
		{
			arr.push(str.slice(i,i+size));
			i=i+size;
		}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
