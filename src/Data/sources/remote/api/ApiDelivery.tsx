// Configuración de axios para la creación de la API.
import axios from 'axios';

const ApiDelivery = axios.create({
  baseURL: 'http://192.168.1.69:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export { ApiDelivery };