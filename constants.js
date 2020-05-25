const dateStart = "2019-01-01T00:00:00UTC";
const dateEnd = "2019-12-31T23:59:59UTC";
const station = "1014";
const ENDPOINT = `https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/${dateStart}/fechafin/${dateEnd}/estacion/${station}/?api_key=${process.env.API_KEY}`;

module.exports = { dateStart, dateEnd, station, ENDPOINT }