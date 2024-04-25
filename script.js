function stringChop(str, size) {
  // your code here
	let arr=[];
	if(!str)
		return [];
	let i=0;
	while(i<str.length)
		{
			arr.push(str.slice(i,i+1));
			i+=size;
		}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
