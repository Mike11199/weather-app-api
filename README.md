# weather-app-api

<p>Project using NPM to install packages, Webpack as a module bundler, Babel as a transpiler, SCSS, and asynchronous JavaScript functions to send/retrieve data from an API.</p>

[<img alt="alt_text" width="200px" src="https://user-images.githubusercontent.com/91037796/151688958-059ec882-a5ee-41cc-8985-c9ed26969de3.png" />](https://mike11199.github.io/weather-app-api/)


<h2>Concepts learned from this project</h2>

-Sending an asynchronous JavaScript request using a REST API to OpenWeatherMap to request weather information for a specific location.  </br></br>
-Installing npm to the project as a package manager to automatically install 3rd party packages and keep them up to date.  </br></br>
-Using webpack as a module bundler to create a single script file in the dist folder and separate JavaScript into separate modules.  </br></br>
-Splitting webpack configurations into a development and production version which can be run with an npm script to make debugging possible in a dev server.</br></br>
-Using a transpiler called Babel to be able to use keywords such as 'import' and 'require', and extra JavaScript features such as SCSS instead of CSS.  </br></br>
-Used npm task runner features to make some tasks such as running webpack and deploying to github pages subdirectory faster.  </br></br>
-Added an import statement in index.js to be able to use SCSS for nesting, variables, and & operators in CSS sheets.  </br></br>
-Modified event listeners to use asynchronous functions and allow top-level await statements.  </br></br>
-Extracted data from the API to call another API (OpenWeatherMap detail), feeding in long/lat data from the initial call to pull future weather forecast and other infromation with another asynchronous function.  </br></br>


<br />
  
![1](https://user-images.githubusercontent.com/91037796/155059482-3574c3f6-876b-4d2c-897b-28864314adc1.png)
