/************************************************************
* isEven takes in a number parameter and checks to see if it
* is even. If it is, it returns true. Otherwise, it returns
* false.
*************************************************************/

function isEven(num) {
	return num % 2 === 0;
}

/************************************************************
* factorial takes in a number parameter and recursively calls
* itself until the number equals 1.
*************************************************************/

function factorial(num) {
	if(num == 1 || num == 0)
	{
		return 1;
	}
	return num * factorial(num - 1);
}

/************************************************************
* kebabToSnake takes in a string parameter and replaces all 
* '-' with '_'
*************************************************************/

function kebabToSnake(str) {
	return str.replace(/-/g, '_');
}