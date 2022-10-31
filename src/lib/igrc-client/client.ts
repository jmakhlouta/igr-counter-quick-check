import { IGRC_API_BASE_URL } from "$lib/public-env"

// Provide a friendlier upstream typing, even without axios
type Method = "POST"

const baseUrl = IGRC_API_BASE_URL

const baseConfig = {
  headers: {
    "content-type": "application/json"
  }
} as RequestInit

function createUrl(path: string) {
  return new URL(`${baseUrl}${path}`).toString()
}

export async function send<Req, Res>(endpoint: string, method: Method, data?: Req) {
  const requestConfig = {
    url: createUrl(endpoint),
    method: method.toString(), 
  }

  const dataConfig = {} as { body: string }
  if (data) {
    dataConfig.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(createUrl(endpoint), Object.assign({}, baseConfig, requestConfig, dataConfig))
    const status = response.status
    const data = await response.json()
    return { status, data }
  } catch (error) {
    console.error({ msg: "IGRC client error", error })
    throw error
  }
}
