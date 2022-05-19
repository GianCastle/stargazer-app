# Stargazer app - simple app to view github stars based on topics
<img width="1245" alt="image" src="https://user-images.githubusercontent.com/6842883/169386345-74e83984-89bd-4081-a2d5-968be0fecf2e.png">

# How to install
⚠️ Your machine must have installed `node @ "16.13.1"`. It is recommended to use a enviroment version tool such as [NVM](https://github.com/nvm-sh/nvm)
 
- Clone this repo 
- Inside the folder, run `npm install`
- Before running the app, we must create and `.env` that have the same keys as in the `.env.example` file
- For getting a Github Auth Token please, [read this blog](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) first 
- Make sure to paste the Github Token into the `.env` file
- We can run the app running `npm start` and woalah! 💫

# Tech Stack 💻
I wanted to follow the  KISS principle as far as possible. So this is the current stack in this FE
- `react`, `apollo`, `bootstrap`, `javascript`, `jest`, `font-awesome`

# Areas of improvement 
- I really dislike the `node->edges->nodes` object structure, we probably want to add some kindof a `middleware` that beautify the response structure in a more friendly way
- For the sake of speed I used `javascript` but Typescript is the new JavaScript I think this project can benefit from it if for example, we want to add the response `middleware` 
- I like to follow a pattern where my pages do not use `react standar hooks`, pages or components only have `custom hooks` embedded in them and these hooks implement the `react standar hooks`. See https://kyleshevlin.com/use-encapsulation
- A pagination would be ideal for this kind of lists
- Would be great to add `WCAG`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
