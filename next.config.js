module.exports = {
    env: {
        MONGO_URI: `mongodb+srv://mirandev:${process.env.REACT_APP_SECRET_PASS}@cluster0.t1e5o.mongodb.net/<dbname>?retryWrites=true&w=majority`
    }
}