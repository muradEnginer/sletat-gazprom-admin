import axios from 'axios'
import { API_URL } from '@config'
const isProd = import.meta.env.PROD

const token = localStorage.getItem('access_token')

const headers =  {
    'Content-Type': 'application/json',
    Accept: 'application/json',
} 

if (token) {
  Object.assign(headers, { Authorization: `Bearer ${token}` })
}

const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers,
})

httpClient.interceptors.request.use(
  (config) => {
    if (!isProd) {
      console.info('📤 Request:', {
        url: config.url,
        method: config.method,
        headers: config.headers,
        params: config.params,
        data: config.data,
      })
    }
    return config
  },
  (error) => {
    if (!isProd) {
      console.error('❌ Request Error:', error)
    }
    return Promise.reject(error)
  }
)

httpClient.interceptors.response.use(
  (response) => {
    if (!isProd) {
      console.info('📥 Response:', {
        url: response.config.url,
        status: response.status,
        data: response.data,
      })
    }
    return response
  },
  (error) => {
    if (!isProd) {
      console.error('❌ Response Error:', {
        message: error.message,
        response: error.response,
      })
    }
    return Promise.reject(error)
  }
)

export default httpClient