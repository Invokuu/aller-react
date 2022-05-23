# Aller Media React App

I made this as requested by [Aller Media](https://www.aller.no/) after interview.

I felt like my [React](https://reactjs.org/) knowledge was pretty limited, so I decided to do some research.
I've been doing a course on [Codecademy](https://www.codecademy.com/) ([React](https://www.codecademy.com/learn/react-101) and [React Router](https://www.codecademy.com/learn/learn-react-router)) and watched videos, now I feel like I have a better grasp on the topic.
From what I've learned best practice is using Function component and not Class components, but I've also seen some mention that Function components are good for stateless components while Class components are good for stateful components.
Would like to know what you do here. I like classes (but used functions) even though they might be considered more verbose.

I also learned some about [Next.js](https://nextjs.org/) and also looked a little at [Svelte](https://svelte.dev/), but decided to put this aside for now.
I've used [Axios](https://axios-http.com/) in this project to use a common library, but I am also familiar with [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (and [XHR](https://developer.mozilla.org/en-US/docs/Glossary/XHR_(XMLHttpRequest))).

This application is written in [TypeScript](https://www.typescriptlang.org/)([X](https://reactjs.org/docs/introducing-jsx.html)) because I know it's something Aller use even though it's not a part of the assignment I was given.
For styling, I chose to use [SASS](https://sass-lang.com/). Not sure what Aller use, but wanted to include this as I often use it.
I decided to include one SCSS-file per component with same name, I'm not sure what the best practice is and would like to know more about this.
It currently doesn't look too great on mobile, but might fix this.

In the json data there was a type value for row and article, but it didn't seem to be too relevant in this project.
I haven't taken that much into consideration for now.
Would love to know more about what this is being used for.

The package manager of choice is [`yarn`](https://yarnpkg.com/). I'm familiar with [`npm`](https://www.npmjs.com/) commands.
I know of [`pnpm`](https://pnpm.io/), but I've never used it.
From what I've seen it's apparently way faster and space efficient, so I might give it a try in a future project.

For hosting, I'm using [Vercel](https://vercel.com/) and the [**demo is here**](https://aller.andydev.net).

To recreate the template used in this project, you run:
```sh
# replace "my-app" with directory name (or . for current)
yarn create react-app my-app --template typescript
```
...and then you install these packages:
```sh
yarn add sass react-router-dom @types/react-router-dom axios uuid @types/uuid
```

**- Andy**

*Below is the original part of `README.md` (from the template) which shows how to run and build the app.*

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
