const clf = require('./index');

const test = () =>
{
	console.log("Hola",clf("This should not blink with default color (no parameters passed)"),"End");

	console.log(clf("This should not blink with default color", null, false));
	console.log(clf("This should not blink with Green color", "#03fc4a", false));
	console.log(clf("This should not blink with Yellow color", "#fcf003", false));
	console.log(clf("This should not blink with Orange color", "#fc9803", false));
	console.log(clf("This should not blink with Red color", "#fc0303", false));

	console.log(clf("This should blink with default color", null, true));
	console.log(clf("This should blink with Green color", "#03fc4a", true));
	console.log(clf("This should blink with Yellow color", "#fcf003", true));
	console.log(clf("This should blink with Orange color", "#fc9803", true));
	console.log("Hola",clf("This should blink with Red color", "#fc0303", true),'End');

}

test();
