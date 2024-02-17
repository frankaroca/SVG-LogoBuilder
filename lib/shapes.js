// lib/shapes.js

// Import the 'fs' (file system) and 'path' modules
const fs = require('fs');
const path = require('path');

// Function to create an SVG string based on user input
function createSVG(text, textColor, shape, shapeColor) {
    let shapeTag;
    
// Determine the correct SVG shape tag based on the user's choice
    switch (shape) {
      case 'circle':
        // Learned circle tag from https://www.w3schools.com/graphics/svg_circle.asp
        shapeTag = `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>`;
        break;
      case 'square':
        // Learned rectangle tag from https://w3schools.com/graphics/svg_rect.asp
        shapeTag = `<rect x="50" y="30" width="200" height="140" fill="${shapeColor}"/>`;
        break;
      case 'triangle':
        // Learned on creating "triangle" via polygon tag https://www.w3schools.com/graphics/svg_polygon.asp
        shapeTag = `<polygon points="0,200 300,200 150,0" fill="${shapeColor}"/>`;
        break;
      default:
        throw new Error('Invalid shape choice');
    }

// Create the complete SVG string
  const svgString = `<svg width="300" height="200">
  ${shapeTag}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

return svgString;
}

// Function to save the SVG to a file
function saveSVGToFile(text, svgString) {
// Get the path to the 'examples' folder
  const examplesDir = path.join(__dirname, '../examples');
  
// Create the 'examples' folder if it doesn't exist
  if (!fs.existsSync(examplesDir)) {
    fs.mkdirSync(examplesDir);
  }

// Generate a unique file name based on the text provided by the user
  const fileName = `logo.svg`;
  
// Create the full file path
  const filePath = path.join(examplesDir, fileName);

// Write the SVG string to the file
  fs.writeFileSync(filePath, svgString, 'utf8');
}

// Export the functions to be used in other files
module.exports = {
  createSVG,
  saveSVGToFile,
};