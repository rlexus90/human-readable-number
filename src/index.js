module.exports = function toReadable(number) {
	let ans = '';
	if (isNaN(number)) { return 'Це не число!' }
	switch (true) {
		case number === 0: ans = 'zero';
			break;
		case number < 20:
			ans = toReadable20(number);
			break;
		case number < 100:
			ans = toReadable100(number);
			break;
		case number < 1000:
			ans = toReadable1000(number);
			break;
	}
	return ans
}

const numberArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
	'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
	'seventeen', 'eighteen', 'nineteen'];
const tenNumberArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
	'eighty', 'ninety'];


function toReadable20(number) {
	return numberArr[number]
}

function toReadable100(number) {
	let a = 0,
		b = 0;
	a = Math.floor(number / 10);
	b = number - a * 10;
	return tenNumberArr[a] + ' ' + numberArr[b]
}

function toReadable1000(number) {
	let a = 0,
		b = 0,
		c = 0;
	a = Math.floor(number / 100);
	b = Math.floor((number - a * 100) / 10);
	c = number - a * 100 - b * 10;
	if (b < 2) {
		return numberArr[a] + ' hundred ' + numberArr[number - a * 100]
	}
	return numberArr[a] + ' hundred ' + tenNumberArr[b] + ' ' + numberArr[c]
}



// console.log(toReadable(0))
// console.log(toReadable(1))
// console.log(toReadable(10))
// console.log(toReadable(19))
// console.log(toReadable(55))