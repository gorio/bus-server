import fs from 'fs'
import parse from 'node-csv-parse'

const parseData = data => parse(data).asObjects()

export default (resource) => {
  const file = `./src/resources/${resource}.csv`

  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) return reject(err)
      return resolve(parseData(data))
    })
  })
}
