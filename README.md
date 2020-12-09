<a href="https://firebase.google.com/">
  <img src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-built_black.svg" width="135" height="60" />
</a>

# File Uploader With Firebase Cloud Storage, ReactJS, NodeJS

### Full Step-By-Step Guide: [Read the Medium post](https://medium.com/better-programming/how-to-upload-files-to-firebase-cloud-storage-with-react-and-node-js-e87d80aeded1)

![File Uploader ReactJS + NodeJS + Firebase](/public/file-uploader-react-node-firebase-screenshot.png)

## Pre-requisites

To use this file uploader you need the following:

1. Set up a Firebase account > activate Cloud Storage > generate a private key, which will give you a JSON file to store somewhere safe so you can reference to it.

2. Add a `.env` file to the `/api` folder with 3 environment variables inside for:

- The path to your private key JSON file
- Your Firebase project ID
- Your Firebase Cloud Storage bucket URL

Names for these variables used in the repo are the followings:

```
GCLOUD_APPLICATION_CREDENTIALS=
GCLOUD_PROJECT_ID=
GCLOUD_STORAGE_BUCKET_URL=
```

3. Run `yarn start`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode on port 3000 as well as the API on port 8080 if you don't specify a different port as env variable in the start script.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
