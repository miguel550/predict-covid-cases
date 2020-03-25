const dsv = require("d3-dsv")

function parseCsv(data) {
  return dsv.csvParse(data)
}

module.exports = parseCsv