<template>
   <div class="row">
      
      <div v-for="book of getBooks"
           v-bind:key="book.id"
           class="col-12 col-md-6 col-lg-4 mb-3"
      >
         <div class="card" style="width: 18rem;">
            <img alt="rich" class="card-img-top" src="../../public/images/llogo.png">
            <div class="card-body">
               <h5 class="card-title">{{ book.name }}</h5>
               <p class="card-text">{{ book.description | str_limit(50)}} </p>
               <router-link :to="'/book-info/' + book.id" class="btn btn-primary" type="button">
                  Read
               </router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
   name: "Book-s",
   computed: {
      ...mapGetters(['getBooks'])
   },
   methods: {
      ...mapActions(['fetchBooks'])
   },
   mounted() {
      this.fetchBooks(this.$route.params.id)
   },
   watch: {
      '$route.params.id'() {
         this.fetchBooks(this.$route.params.id)
      }
   }
   
}
</script>

<style scoped>

</style>