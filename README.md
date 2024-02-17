# SVG-LogoBuilder

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Objective

From scratch, create an application using the Jest and Inquirer packages to be able to test out and generate an SVG file that will render in the shape of a square, circle, or triangle. Prompted to choose what shape to use and what colors to enter for both the text and the shape, the user will also be prompted to enter at most 3 text characters to be used inside of the shape. Once the user finished all prompts, the new SVG file will be generated inside of the examples folder consisting of what the user has entered.


## Link 
https://www.youtube.com/watch?v=hcGHbK2LqGY

## How to Run

1. Run 'git clone (repo link)' on Git Bash'
2. CD into project directory
3. Run project via code editor (e.g. Visual Studio Code)
4. Open the terminal
5. Run 'npm install' to download all necessary dependencies
6. Run 'node index.js' and answer all of the prompts
