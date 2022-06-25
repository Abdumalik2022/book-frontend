<template>
   <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Book categories:</a>
      <router-link :to="'/category/' + category.id" class="list-group-item list-group-item-action lists"
         v-for="category of getCategory"
         v-bind:key="category.id"
      >
      {{ category.name }}
      </router-link>
      
   </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
   name: "book-category",
   computed: {
      ...mapGetters(['getCategory'])
   },
   methods: {
      ...mapActions(['fetchCategory'])
   },
   mounted() {
      this.fetchCategory()
   }
}
</script>

<style scoped>
.list-group-item:hover {
   background-color: #a7b8c9;
   color: white;
}
.disabled {
   font-size: 20px;
   font-weight: bold;
   font-family: Serif;
   background-color: aliceblue;
   
}
.lists{
   font-weight: 480;
   font-size: 18px;
   font-family: "Serif";
}
.lists:hover{
   font-weight: 900;
   font-size: 25px;
   font-family: "Serif";
   background-color: aliceblue;
   color: #8496a8;
}
</style>