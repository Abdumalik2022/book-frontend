import axios from "axios";
import index from "./index";

axios.defaults.headers.common['Content-Type'] = 'application/ld+json'

axios.interceptors.request.use((config) => {
   if (config.url !== 'http://localhost:8505/api/users/auth') {
      config.headers.common['Authorization'] = 'bearer ' + index.getters.getToken
   }

   return config
})

export default axios