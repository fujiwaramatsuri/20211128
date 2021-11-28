const array = [2,4,7,5,4,3,8];

const new_array2 = array.filter(function(val, i, array){
	return (array.indexOf(val) === i);
});

console.log(new_array2); 