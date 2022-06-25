import axios from "./axios";

export default {
   actions: {
      fetchBooks(context, categoryId=null) {
         return new Promise((resolve, reject) => {
            let categoryUrl = ''

            if (categoryId) {
               categoryUrl = '?category=' + categoryId
            }
            axios
               .get('http://localhost:8505/api/books' + categoryUrl)
               .then((response) => {
                  let books = {
                     models: response.data['hydra:member'],
                     totalItems: response.data['hydra:totalItems']
                  }
                  context.commit('updateBooks', books)
                  resolve()
               })
               .catch(() => {
                  console.log('Error in getting books')
                  reject()
               })
         })
      },
      fetchBook(context, bookId) {
         return new Promise((resolve, reject) => {
            axios
               .get('http://localhost:8505/api/books/' + bookId)
               .then((response) => {
                  let book = {
                     name: response.data.name,
                     text: response.data.text
                  }
                  context.commit('updateBook', book)
                  resolve()
               })
               .catch(() => {
                  console.log('Error in getting a book')
                  reject()
               })
         })
      },
      addBook(context, $data) {
         return new Promise((resolve, reject) => {
            axios
               .post('http://localhost:8505/api/books', $data)
               .then(() => {
                  resolve()
               })
               .catch(() => {
                  console.log('Error in adding book')
                  reject();
               })
         })
      }
   },
   mutations: {
      updateBooks(state, books) {
         state.books = books
      },
      updateBook(state, book) {
         state.book = book
      },
   },
   state: {
      books: {
         models: [],
         totalItems: 0
      },
      book: {
         name: null,
         text: null
      }
   },
   getters: {
      getBooks(state) {
         return state.books.models
      },
      getBook(state) {
         return state.book
      }
   }

}