import fs from 'node:fs/promises'
import path from 'node:path'
import sanitize from 'sanitize-html'

export async function getData() {

  try {
    const pathJSON = path.join('data', 'data.json')
    const data = await fs.readFile(pathJSON, 'utf8')
    const cleanData = sanitize(data, { allowedTags: ['b'], allowedAttributes: {} })
    const parsedData = JSON.parse(cleanData)
    return parsedData

  } catch (err) {
    console.log(err)
    return []
  }
}