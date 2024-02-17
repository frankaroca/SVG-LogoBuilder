// index.js

// Import the Inquirer library to prompt the user for input
const inquirer = require('inquirer');

// Import the shapes module from the 'lib' folder
const shapes = require('./lib/shapes');

// Function to create an SVG shape based on user input
async function createSVGShape() {
  try {
    // Prompt the user for input using Inquirer
    const answers = await inquirer.prompt([
      // Prompt for text, text color, shape choice, and shape color
      {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters for SVG text:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color keyword or hexadecimal value for the text color:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Please choose which shape you would like to use: ',
        choices: ['circle', 'square', 'triangle'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color keyword or hexadecimal number for the shape color:',
      },
    ]);

    // Create an SVG string based on user input
    const svgString = shapes.createSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);

    // Save the SVG to a file in the 'examples' folder
    shapes.saveSVGToFile(answers.text, svgString);
    
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the function to create an SVG shape based on user input
createSVGShape();