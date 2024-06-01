const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

const csrfHeaders = {
  'X-Xsrf-Token': document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'))?.[2] ?? ''
}

const apiClient = {
  get: (url: string): Promise<Response> => {
    return fetch(url, {
      method: 'GET',
      headers: { ...defaultHeaders },
      redirect: 'error'
    })
  },
  post: (url: string, body?: unknown): Promise<Response> => {
    return fetch(url, {
      method: 'POST',
      headers: { ...defaultHeaders, ...csrfHeaders },
      body: body ? JSON.stringify(body) : undefined,
      redirect: 'error'
    })
  },
  put: (url: string, body?: unknown): Promise<Response> => {
    return fetch(url, {
      method: 'PUT',
      headers: { ...defaultHeaders, ...csrfHeaders },
      body: body ? JSON.stringify(body) : undefined,
      redirect: 'error'
    })
  },
  delete: (url: string, body?: unknown): Promise<Response> => {
    return fetch(url, {
      method: 'DELETE',
      headers: { ...defaultHeaders, ...csrfHeaders },
      body: body ? JSON.stringify(body) : undefined,
      redirect: 'error'
    })
  }
}

export default apiClient
