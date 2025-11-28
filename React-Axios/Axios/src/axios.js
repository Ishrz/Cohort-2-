import axios from "axios";

const api=axios.create({
    baseURL:"https://69289694b35b4ffc50163d1b.mockapi.io",
    timeout:1000,
})

export default api