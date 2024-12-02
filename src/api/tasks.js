import axios from "axios"

const URL = 'https://backend-prueba-upfo.onrender.com'
const endpoint = `${URL}/api/tasks`

export const fetchTasks = () => axios.get(endpoint)

export const fetchTask = (id) => axios.get(`${endpoint}/${id}`)

export const createTask = (newTask) => axios.post(endpoint, newTask)

export const updateTask = (id, task) => axios.put(`${endpoint}/${id}`,task)

export const deleteTask = (id) => axios.delete(`${endpoint}/${id}`)