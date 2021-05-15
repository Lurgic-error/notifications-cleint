module.exports = function ({ collections }){

    const { subscriptionCollection } = collections

    return async () => {
        return await subscriptionCollection.find()
    }
}