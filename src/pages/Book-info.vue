<template>
<div class="container-fluid">
   <div class="col-8">
      <h2>{{ getBook.name }}</h2>
      <hr>
      <p> {{ getBook.text }} </p>
   </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
   name: "Book-info",
   computed: {
      ...mapGetters(['getBook'])
   },
   methods: {
      ...mapActions(['fetchBook'])
   },
   mounted() {
      this.fetchBook(this.$route.params.bookId)
   }
}
</script>

<style scoped>
h2 {
   font-family: Serif;
   font-weight: bold;
}
p {
   font-family: Arial;
   font-size: 20px;
}
</style>