# ⬠ Rotas calculator

Website for calculating the necessary angle and compression for a projectile in a spring cannon to reach a given objective.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), uses the [Tailwind CSS](https://tailwindcss.com) framework, and is deployed through [Firebase](https://firebase.google.com).
It is available on [Rotas-Calculator](https://rotas-calculator.web.app).

## Features

- Angle and spring compression calculator
- Projectile motion simulator
- Explanation of math calculations
- FAQ

## Documentation

Being fundamentally a react app, the Rotas site code is divided between pages and components in order to improve performance and avoid unnecessary repetition. The [src](https://github.com/arepo90/calculator-app/tree/main/src) directory contains the base code, while the [public](https://github.com/arepo90/calculator-app/tree/main/public) directory holds the production optimized code. It should be noted that, though there are some .css files, they have limited default parameters, and the main styles are applied from the .jsx files by using Tailwind.

### Context provider

A component for handling site-wide settings, as a functional alternative to using [props](https://reactjs.org/docs/components-and-props.html) as component parameters. It handles the current main color, theme, state, and whether certain components are shown or not.

### Components

All components use the context provider as a means to modify or read the current theme and main color. 

#### Header

Reusable standard header title component styled with tailwind. The title is passed as a parameter to the function.

#### Navbar

Top navigation bar with a button to toggle the sidebar and the site logo.

#### Sidebar

Page titles and addresses are rendered from the links.js file, again with the use of [react-router-dom](https://reactrouter.com/en/main) for in-site navigation between said pages. The navigation refers to client-side routing, rather than regular redirects, thus having different URL's from a single base webpage.

#### ThemeSettings

A simple settings page for changing the theme and current main color, handled by the context provider.

#### Index

Brief file for exporting the components to the rest of the webpage.

### Pages

All pages use the context provider for fetching the current theme and main color.

#### Calculator

Main page. Collects user input and handles the computations described in the Math page. A graph is rendered with [function-plot](https://github.com/mauriciopoppe/function-plot) showing the path of the projectile.

#### Math

Explanation of the mathematical procedures behind the solution. Equations are renderd in LaTeX by [react-latex](https://github.com/zzish/react-latex).

#### Simulator

A simple page for rendering an inframe of a [Geogebra App](https://www.geogebra.org/m/BXBMnZPS) (by Tom Walsh). No specific purpose other than testing and checking the solution.

#### About

General information and FAQ's.

## Author

Arepo - Esteban Martinez

Vick1973 - Braulio Milanés

### Extra components

- [function-plot](https://github.com/mauriciopoppe/function-plot)
- [react-latex](https://github.com/zzish/react-latex)
- [Geogebra App](https://www.geogebra.org/m/BXBMnZPS)
