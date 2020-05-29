const mysqlx = require('@mysql/xdevapi');
const config = {
    password: 'root',
    user: 'root',
    host: 'localhost',
    port: 33060,
};

const dbSession = mysqlx.getSession(config);

async function createDatabase(data) {
    try {
        const session = await dbSession;
        await session.createSchema('temperatures');
        console.log('created screma');

        return session.getSchema();
    } catch (error) {
        console.log({ error });
        const session = await dbSession;
        console.log("before drop")
        await session.dropSchema('temperatures');
        console.log('screma droped');

        await session.createSchema('temperatures');
        console.log('created screma');

        return session.getSchema();
    } finally {
        populateCollection(data);
    }
}

async function populateCollection(data) {
    dataSon = [{ name: 'hola' }, { nombre: 'eee' }];

    try {
        const session = await dbSession;
        await session.getSchema('temperatures').createCollection('datas');

        return session
            .getSchema('temperatures')
            .getCollection('datas')
            .add([{ data }])
            .execute();
    } catch (error) {
        console.log({ error });
    }
}

module.exports = { createDatabase };
