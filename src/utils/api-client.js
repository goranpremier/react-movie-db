const API_URL = process.env.REACT_APP_API_URL
const API_TOKEN = process.env.REACT_APP_API_TOKEN

export async function client(
  endpoint = '/',
  { customHeaders, ...customConfig },
) {
  const config = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
      ...customHeaders,
    },
    customConfig,
  }

  return window.fetch(API_URL + endpoint, config).then(async (response) => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}
