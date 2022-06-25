import axios from "./axios";

export default {
   actions: {
      fetchCategory(context) {
         return new Promise((resolve, reject) => {
            axios
               .get('http://localhost:8505/api/categories')
               .then((response) => {
                  let categories = {
                     models: response.data['hydra:member'],
                     totalItems: response.data['hydra:totalItems']
                  }
                  context.commit('updateCategory', categories)
                  resolve();
               })
               .catch(() => {
                  console.log('Error with getting categories')
                  reject();
               })
         })
      },
      addCategory(context, $data) {
         return new Promise((resolve, reject) => {
            axios
               .post('http://localhost:8505/api/categories', $data)
               .then(() => {
                  resolve()
               })
               .catch(() => {
                  console.log('Error in adding category')
                  reject();
               })
         })
      }
   },
   mutations: {
      updateCategory(state, categories) {
         state.categories = categories
      }
   },
   state: {
      categories: {
         models: [],
         totalItems: 0
      }
   },
   getters: {
      getCategory(state) {
         return state.categories.models
      }
   },
}