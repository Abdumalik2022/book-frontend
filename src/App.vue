<template>
  <div id="app">
     <div class="container-fluid">
        <div class="row p-0">
           <div class="col">
              <!-- Header start -->
              <NavBar></NavBar>
              <!-- Header end -->
           </div>
        </div>
      
        <div class="row mt-4">
           <div class="col-12 col-md-3 col-lg-2 mb-3">
              <!-- categories start -->
              <book-category></book-category>
              <!-- categories end -->
           </div>
           <div class="col-12 col-md-9 col-lg-10">
              <router-view></router-view>
           </div>
        </div>
   
   
        <!-- footer qatori boshlandi -->
        <div class="row mt-5">
           <div class="col">
              <footer class="bg-dark text-light p-4 justify-content-center">
                 &copy; Developed by junior full-stack web developer
              </footer>
           </div>
        </div>
        <!-- footer tugadi -->
   
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar";
import BookCategory from "@/components/category";

export default {
   components: {BookCategory, NavBar}
}
</script>

<style>

</style>
