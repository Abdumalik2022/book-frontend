<template>
   <div class="container-fluid">
      <div class="row justify-content-start">
         <div class="card border-secondary mb-3 col-9">
            <div class="card-header p-3"><b>Add Book</b></div>
            <div class="card-body text-secondary">
               <form @submit.prevent="addBooks">
                  <div class="mb-3">
                     <label class="form-label" for="exampleInputEmail1">Book's Name</label>
                     <input id="exampleInputEmail1" v-model="form.name" class="form-control" type="text">
                  </div>
                  <div class="mb-3">
                     <label class="form-label">Book's small Description</label>
                     <textarea id="exampleFormControlTextarea1" v-model="form.description" class="form-control"
                               rows="3"></textarea>
                  </div>
                  <div class="mb-3">
                     <label class="form-label">Book's whole Text</label>
                     <textarea id="exampleFormControlTextarea1" class="form-control" rows="6"
                     v-model="form.text"></textarea>
                  </div>
                  <div class="mb-3">
                     <select aria-label="Default select example" class="form-select" v-model="form.category">
                        <option selected>Choose the Book's category</option>
                        <option value="/api/categories/1">Classic</option>
                        <option value="/api/categories/2">Detective</option>
                        <option value="/api/categories/3">Fantastic</option>
                     </select>
                  </div>
                  <button class="btn btn-primary" type="submit">Submit</button>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
   name: "Add-book",
   data() {
      return {
         form: {
            name: '',
            description: '',
            text: '',
            category: ''
         }
      }
   },
   methods: {
      ...mapActions(['addBook']),
      addBooks() {
         this.addBook(this.form)
            .then(() => {
               console.log('The book inserted successfully')
               this.$router.push('/books')
            })
            .catch(() => {
               console.log('Something went wrong with adding books')
            })
      }
   }
}
</script>

<style scoped>
.card {
   padding: 0;
}
</style>