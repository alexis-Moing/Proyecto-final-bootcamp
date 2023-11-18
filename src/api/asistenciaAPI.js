import axios from "axios"

const asistenciaApi = axios.create({
    baseURL: "https://nfdfz6vz-8000.brs.devtunnels.ms",
})

export default asistenciaApi
