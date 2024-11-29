const hexTo24BitAnsi = (hexColor) =>
{
    // Remove the '#' if it exists
    hexColor = hexColor.replace(/^#/, '');

    // Ensure the input is a valid 6-character hex color
    if (!/^([A-Fa-f0-9]{6})$/.test(hexColor)) {
        throw new Error("Invalid hex color. Must be in the format '#RRGGBB' or 'RRGGBB'.");
    }

    // Extract the red, green, and blue values from the hex string
    const r = parseInt(hexColor.slice(0, 2), 16); // Red
    const g = parseInt(hexColor.slice(2, 4), 16); // Green
    const b = parseInt(hexColor.slice(4, 6), 16); // Blue

    // Return the 24-bit RGB ANSI escape sequence
    return `38;2;${r};${g};${b}`;
}

const frmt = (text, color, blinking) =>
{
	let output = text;

	if(color)
	{
		output = `\x1b[${hexTo24BitAnsi(color)}m` + output + `\x1b[0m`;
	}

	if(blinking)
	{
		output = "\x1b[5m" + output + "\x1b[25m";
	}

	return output;
}

const test = () =>
{
	console.log("Hola",frmt("This should not blink with default color (no parameters passed)"),"End");

	console.log(frmt("This should not blink with default color", null, false));
	console.log(frmt("This should not blink with Green color", "#03fc4a", false));
	console.log(frmt("This should not blink with Yellow color", "#fcf003", false));
	console.log(frmt("This should not blink with Orange color", "#fc9803", false));
	console.log(frmt("This should not blink with Red color", "#fc0303", false));

	console.log(frmt("This should blink with default color", null, true));
	console.log(frmt("This should blink with Green color", "#03fc4a", true));
	console.log(frmt("This should blink with Yellow color", "#fcf003", true));
	console.log(frmt("This should blink with Orange color", "#fc9803", true));
	console.log("Hola",frmt("This should blink with Red color", "#fc0303", true),'End');

}

module.exports = frmt
