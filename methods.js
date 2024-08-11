export default {
  get(url) {
    const mySuperPromise = fetch(url)
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        return data.data
      })
    return mySuperPromise
  },
  post(url, body) {
    return fetch(url, {
      method: 'POST',
      body: body
    })
    // .then((newId) => {
    //   console.log('záznam v pohodě uloženej, jeho nové id v tabulce je ' + newId)
    // })
  },
  put() {

  },
  delete() {

  }
}