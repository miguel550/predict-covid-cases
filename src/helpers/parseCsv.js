const dsv = require("d3-dsv")

function parseCsv(data) {
  const substitutes = {
    "2": "\"first_recorded\"",
    "3": "\"lat\"",
    "4": "\"long\"",
  }

  const rows = data.split("\n")
  const headers = rows[0].split(",").map((d, i) => {
    return substitutes[i] ? substitutes[i] : d
  }).join(",")
  const raw = headers + "\n" + rows.slice(1).join("\n")
  const parsed = dsv.csvParse(raw)

  return parsed
}

module.exports = parseCsv