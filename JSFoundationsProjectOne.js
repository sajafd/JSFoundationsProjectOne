/**
 * Receives an array of numbers
 * Filters out odd numbers
 * Returns an array of the even numbers
 *
 * Example usage:
 *
 *     filterEvens([1, 2, 3, 4, 5])
 *     returns [2, 4]
 *
 */
function filterEvens(numbers) {
	let evens = []
	for(let i=0; i<numbers.length; i++) {
		if (numbers[i]%2 === 0) {
			evens.push(numbers[i]);
		}
	}

	return evens;
}

/**
 * Receives an array of numbers
 * Filters out even numbers
 * Returns an array of the odd numbers
 *
 * Example usage:
 *
 *     filterOdds([1, 2, 3, 4, 5])
 *     returns [1, 3, 5]
 *
 */
function filterOdds(numbers) {
	let odds = []
	for(let i=0; i<numbers.length; i++) {
		if (numbers[i]%2 !== 0) {
			odds.push(numbers[i]);
		}
	}

	return odds;
}

/**
 * Receives an array of numbers
 * Returns the sum of the odd numbers in that array
 *
 * Example usage:
 *
 *     sumOdds([1, 2, 3, 4, 5])
 *     returns 9
 *
 */
function sumOdds(numbers) {
	let odds = filterOdds(numbers);
	let sum = 0;
	for (let i=0; i<odds.length; i++) {
		sum += odds[i];
	}
	return sum;
}

/**
 * Receives an array of names
 * Makes the array into an array of pairs
 * Order of names and pairs doesn't matter
 * if the length of the array is odd, the last element is in an array on its own
 * Returns the array of pairs
 *
 * Example usage:
 * 
 *     pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *     returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 * 
 *     pairs(['Aziz', 'Hamza', 'Fawaz', 'Mishmish'])
 *     returns [['Mishmish', 'Fawaz'], ['Aziz', 'Hamza']]
 * 
 */
function makePairs(names) {
	let result = [];
	let pairs = [];

	while(names.length > 1) {
		pairs.push(names.pop());
		pairs.push(names.pop());
		result.push(pairs);
		pairs = [];
	}

	if (names.length) {
		result.push([names.pop()])
	}

	return result;
}

/**************************************************
The following code runs the functions defined above
***************************************************/
let numbers = [153,67,9,34,7,67,342,7,34,8656,2,124,5,43];
let instructors = ["Hamza", "Mshary", "Aziz", "Hussein", "Fawaz"];

// filterEvens
evens = filterEvens(numbers);
console.log(evens);

// sumOdds
sum = sumOdds(numbers);
console.log(sum);

// makePairs
let pairs = makePairs(instructors);
console.log(pairs);