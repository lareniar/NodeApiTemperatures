const axios = require("axios");
const { ENDPOINT } = require("../constants")

async function getDiaryClimatologyJSON() {
    try {
        // con {} accedemos a la propiedad del endpoint porque este es un objeto
        // la palabra es desestructurar
        const { data: { datos } } = await axios(ENDPOINT);
        const { data: climateData } = await axios(datos)
        console.log(climateData);

        return climateData;
    } catch (error) {
        console.log({ error: error.message })
    }
}


module.exports = { getDiaryClimatologyJSON }