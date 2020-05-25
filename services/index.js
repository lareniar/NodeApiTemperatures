const axios = require("axios");

const ENDPOINT = `https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2019-01-01T00:00:00UTC/fechafin/2019-12-31T23:59:59UTC/estacion/1014/?api_key=${process.env.API_KEY}`;

async function getDiaryClimatologyJSON() {
    try {
        // con {} accedemos a la propiedad del endpoint porque este es un objeto
        const { data } = await axios(ENDPOINT);

        // la palabra es desestructurar
        const { datos } = data;
        const { data: ClimateData } = await axios(datos)
        console.log(ClimateData);
    } catch (error) {
        console.log({ error: error.message })
    }




}


module.exports = { getDiaryClimatologyJSON }