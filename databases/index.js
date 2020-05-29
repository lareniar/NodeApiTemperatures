const mysqlx = require('@mysql/xdevapi');
const config = {
    password: 'root',
    user: 'root',
    host: 'localhost',
    port: 33060,
};






const dbSession = mysqlx.getSession(config)
function createDatabase(json) {

    //create database if exists catch error and drop database & create
    dbSession
        .then(session => {
            return session.createSchema('temperatures')
                .then(() => {
                    return session.getSchemas();
                })
        })
        .catch(err => {
            if (err) {
                //drop database
                dbSession
                    .then(session => {
                        return session.dropSchema('temperatures')
                            .then(() => {
                                return session.getSchemas();
                            })
                    });
                //create database
                dbSession
                    .then(session => {
                        return session.createSchema('temperatures')
                            .then(() => {
                                return session.getSchemas();
                            })
                    })
                console.log("create")

            }
            createSchema(json);
        });

};

function createSchema(json) {

    dataSon = [
        { name: "hola" },
        { nombre: "eee" }
    ]


    dbSession.then(session => {
        console.log("aaas");
        session.getSchema('temperatures').createCollection('datas');
        return session.getSchema('temperatures').getCollection('datas')
            .add([{ json }])
            .execute()
    }).catch(err => {
        console.log(err)
    })

}

module.exports = { createDatabase }