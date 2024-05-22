# Fix the Dyte


[video](./video.mkv)

This is a userscript for Tampermonkey that modifies the behavior of a button on the page at `https://debugmedyte.vercel.app/`.

## Features

- Waits for a button to be available on the page, then modifies its `onClick` handler.
- When the button is clicked, it waits for an input field to be available, then retrieves its value.
- The input value is limited to a maximum of 6.
- Calculates the factorial of the input value.
- Waits for the 6th child of `div.card` to be available, then removes it.
- Creates a new div with the factorial value as its text content, then inserts it as the 6th child of `div.card`.
- Generates a number of stars equal to the factorial value.
- Waits for a div with the id `demo` to be available, then appends the stars to it.

## Functions

- `waitForElement(selector, callback)`: Waits for an element matching `selector` to be available on the page, then calls `callback` with the element as its argument.
- `factorial(n)`: Calculates the factorial of `n`.
- `generateStars(n)`: Generates `n` stars. Each star is a div with a random position, size, and animation duration.

## Usage

To use this script, install Tampermonkey, then add this script via the Tampermonkey dashboard. The script will automatically run when you visit `https://debugmedyte.vercel.app/`.