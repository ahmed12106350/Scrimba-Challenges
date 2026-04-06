/*
Challenge 1:
  1. Create a function parseJSONBody which:
    - gathers the incoming chunks into a string 'body'.
    - parses 'body'
    - returns 'body'
    - throws an error if 'body' can't be parsed:
        `Invalid JSON format: ${err}`
*/
export async function parseJSONBody(req) {
  try {
    let body = ''
    req.on('data', (chunks) => {
      body += chunks
    })
    req.on('end', (body) => {
      console.log(body)
      const data = JSON.parse(body)
      return data
    })
  }
  catch (err) {
    throw new Error(`Invalid JSON format: ${err}`)
  }
}