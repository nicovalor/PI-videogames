const getApiInfo = require("./getApiInfo");
const getDBdata = require("./getDBinfo");

const joinData = async (name) => {
  const apiData = await getApiInfo(name);
  const dbData = await getDBdata(name);

  if (dbData.length && apiData.length) {
    const allData = [...apiData, ...dbData];
    return allData;
  }
  if (apiData.length) return apiData;
  if (dbData.length) return dbData;
};

module.exports = joinData;
