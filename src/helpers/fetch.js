export default {
  async post (url, body) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }

    const res = await fetch(url, options)
    return await res.json()
  },

  async get (url) {
    const res = await fetch(url)
    return await res.json()
  }
}
