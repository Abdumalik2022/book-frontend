<template>
   <div class="container-fluid">
      <div class="row justify-content-start">
         <div class="card border-secondary mb-3 col-9">
            <div class="card-header p-3"><b>Add Category</b></div>
            <div class="card-body text-secondary">
               <form @submit.prevent="addCategories">
                  <div class="mb-3">
                     <label class="form-label" for="exampleInputEmail1">Category Name</label>
                     <input id="exampleInputEmail1" v-model="form.name" class="form-control" type="text">
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
         }
      }
   },
   methods: {
      ...mapActions(['addCategory', 'fetchCategory']),
      addCategories() {
         this.addCategory(this.form)
            .then(() => {
               console.log('The category inserted successfully')
               this.$router.push('/books')
               this.fetchCategory()
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