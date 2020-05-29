const services = require("./services");
const databases = require("./databases");

async function main() {
    // peticion para conseguir los JSON del tiempo
    const json = await services.getDiaryClimatologyJSON();
    //crear database
    databases.createDatabase(json);

}

main();
