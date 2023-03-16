import axios from 'axios'
import { environments } from '../../../environments/environments'

export const API = axios.create({
  baseURL: environments.BASE_URL,
})
