const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    const product = req.body;

    const {
        client: MongoClient,
        closeConnectionFn
    } = await createMongoClient();

    const products = MongoClient.collection('products');

    const res = await products.insert(product);

    closeConnectionFn();

    context.res = {
        status: 200,
        body: res
    };
};