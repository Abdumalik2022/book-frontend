<template>
   <div class="p-0">
      <!-- Navbar -->
<!--      <nav class="navbar navbar-expand-lg p-3" >-->
<!--         &lt;!&ndash; Container wrapper &ndash;&gt;-->
<!--         <div class="container-fluid">-->
<!--            -->
<!--            &lt;!&ndash; Navbar brand &ndash;&gt;-->
<!--            <a class="navbar-brand text-light" href="#"><h3>IBOOKS</h3></a>-->
<!--            -->
<!--            &lt;!&ndash; Toggle button &ndash;&gt;-->
<!--            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"-->
<!--                    class="navbar-toggler" data-mdb-target="#navbarSupportedContent"-->
<!--                    data-mdb-toggle="collapse" type="button">-->
<!--               <i class="fas fa-bars"></i>-->
<!--            </button>-->
<!--            -->
<!--            &lt;!&ndash; Collapsible wrapper &ndash;&gt;-->
<!--            <div id="navbarSupportedContent" class="collapse navbar-collapse">-->
<!--               <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
<!--                  -->
<!--                  &lt;!&ndash; Link &ndash;&gt;-->
<!--                  <li class="nav-item">-->
<!--                     <a class="nav-link text-light ms-2" href="#">Link</a>-->
<!--                  </li>-->
<!--                  -->
<!--                  &lt;!&ndash; Dropdown &ndash;&gt;-->
<!--                  <li class="nav-item dropdown">-->
<!--                     <a id="navbarDarkDropdownMenuLink" aria-expanded="false" class="nav-link dropdown-toggle text-light"-->
<!--                        data-bs-toggle="dropdown" href="#" role="button">-->
<!--                        Categories-->
<!--                     </a>-->
<!--                     <ul aria-labelledby="navbarDarkDropdownMenuLink" class="dropdown-menu dropdown-menu-dark">-->
<!--                        <li-->

<!--                        >-->
<!--                           <router-link :to="'/category/' + category.id" class="dropdown-item">{{-->
<!--                                 category.name-->
<!--                              }}-->
<!--                           </router-link>-->
<!--                           <hr class="dropdown-divider">-->
<!--                        </li>-->
<!--                     </ul>-->
<!--                  </li>-->
<!--               -->
<!--               </ul>-->
<!--               -->
<!--               &lt;!&ndash; Search &ndash;&gt;-->
<!--               <form class="w-auto">-->
<!--                  <input aria-label="Search" class="form-control" placeholder="Search" type="search">-->
<!--               </form>-->
<!--            -->
<!--            </div>-->
<!--         </div>-->
<!--         &lt;!&ndash; Container wrapper &ndash;&gt;-->
<!--      </nav>-->
<!--      &lt;!&ndash; Navbar &ndash;&gt;-->
<!--   -->
   
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #a7b8c9">
         <div class="container-fluid">
            <router-link class="navbar-brand text-light" to="/books"><h3>IBOOK</h3></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                     <router-link class="nav-link text-light ms-3" aria-current="page" to="/add-category"><span class="texts">Add category</span></router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link text-light" to="/add-book"><span class="texts">Add books</span></router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link text-light" to="/login"><span class="texts">Login</span></router-link>
                  </li>
               </ul>
               <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-light" type="submit">Search</button>
               </form>
            </div>
         </div>
      </nav>
      
      
      
      
      
   </div>
</template>

<script>
export default {
   name: "Nav-bar",
}
</script>

<style scoped>
.texts {
   font-size: 17px;
   font-weight: 600;
   margin-left: 15px;
}
.texts:hover {
   text-decoration: underline;
}
</style>