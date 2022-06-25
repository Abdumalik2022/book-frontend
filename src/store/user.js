import axios from "axios";

export default {
   actions: {
      fetchToken(context, $data) {
         return new Promise((resolve, reject) => {
            axios
               .post('http://localhost:8505/api/users/auth', $data)
               .then((response) => {
                  console.log(response.data)

                  context.commit('updateToken', response.data.token)
                  resolve()
               })
               .catch(() => {
                  console.log('Something went wrong')
                  reject()
               })
               .finally(() => {
                  console.log('')
               })
         })
      },
      addUser(context, $data) {
         return new Promise((resolve, reject) => {
            axios
               .post('http://localhost:8505/api/user/add', $data)
               .then(() => {
                  resolve()
               })
               .catch(() => {
                  console.log('Error in adding user')
                  reject();
               })
         })
      }
   },
   mutations: {
      updateToken(state, token){
         localStorage.setItem('token', token)
         state.token = token
      }
   },
   state: {
      token: localStorage.getItem('token')
   },
   getters: {
      getToken(state) {
         return state.token
      }
   }
}