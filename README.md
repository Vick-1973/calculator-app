# ⬠ Rotas

Website for calculating the necessary angle and compression for a projectile in a spring cannon to reach a given objective.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), uses the [Tailwind CSS](https://tailwindcss.com) framework, and is deployed through [Firebase](https://firebase.google.com).
It is available on [Rotas-Calculator](https://rotas-calculator.web.app).

## Features

- Angle and spring compression calculator
- Projectile motion simulator
- Explanation of math calculations
- FAQ

## Documentation

Being fundamentally a react app, the Rotas site code is divided between pages and components in order to improve performance and avoid innecessary repetition. The [src](https://github.com/arepo90/calculator-app/tree/main/src) folder contains said directories. It should be noted that the .css files have limited default parameters, and the main styles are applied from javascript by using Tailwind. The [components](https://github.com/arepo90/calculator-app/tree/main/src/components) folder contains website-related code, such as the navbar and sidebar sections for navigating the different pages, while the main algorithm for the calculator is contained in the main function of the [Calculator.jsx](https://github.com/arepo90/calculator-app/blob/main/src/pages/Calculator.jsx) file. The procedure it follows is explained in the Math section, though coding wise it is simply a quadratic equation solver with the parameters received by user input.

Navigation between the pages is handled by [react-router-dom](https://reactrouter.com/en/main) through client side routing instead of redirects, thus handling different URL's while only using one base webpage. A [context provider](https://github.com/arepo90/calculator-app/blob/main/src/contexts/ContextProvider.js) is used with the corresponding react components in order to manage the states of the website through the [ThemeSettings.jsx](https://github.com/arepo90/calculator-app/blob/main/src/components/ThemeSettings.jsx) component. The graphs and equations in the Calculator and Math sections are rendered by the function-plot and react-latex components respectively, and the simulator inframe is powered by a [Geogebra App](https://www.geogebra.org/m/BXBMnZPS) by Tom Walsh.

## Author

Arepo - Esteban Martinez

### Extra components

- [function-plot](https://github.com/mauriciopoppe/function-plot)
- [react-latex](https://github.com/zzish/react-latex)
- [Geogebra App](https://www.geogebra.org/m/BXBMnZPS)
