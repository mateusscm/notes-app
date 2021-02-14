# Note App

Small project that I worked with Next.js, MongoDB and Styled Components technologies. The features are: adding, editing and removing notes. As if it were a to-do list.


## How it works?

Update the `next.config.js` file with your mongodb connection string.\
The connection string you will find in your Clusters on the [MongoDB website](https://www.mongodb.com/);

```js

module.exports = {
    env: {
        MONGO_URI: "Your connection string"
    }
}

```

## Installing and Running the APP 

After the last step.\
Go to your project directory, and run:
### `yarn install` and when it´s done, run `yarn dev`
