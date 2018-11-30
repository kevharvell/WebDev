/**********************************************
* printReverse takes an array as an argument
* and prints out the elements in the array in
* reverse order w/o reversing the array itself
**********************************************/
function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--)
	{
		console.log(arr[i]);
	}
}

/**********************************************
* isUniform takes an array as an argument and
* returns true if all elements in the array are
* identical.
**********************************************/
function isUniform(arr) {
	// Placeholder variable for the first elemnt
	// of the array
	var firstEl = arr[0];
	for(var i = 1; i < arr.length; i++)
	{
		// If the current element does not equal
		// the first element, return false
		if(arr[i] !== firstEl)
		{
			return false;
		}
	}
	return true;
}

/**********************************************
* sumArray takes an array of numbers and returns
* the sum of all numbers in the array
**********************************************/
function sumArray(arr) {
	// Temporary sum variable
	var sum = 0;
	arr.forEach(function(element) {
		sum += element;
	});
	return sum;
}

/**********************************************
* max takes an array of numbers and returns the
* maximum number in the array
**********************************************/
function max(arr) {
	// Temporary max variable
	var max = arr[0];
	arr.forEach(function(element) {
		if(element > max) {
			max = element;
		}
	});
	return max;
}