import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/user";
import book from "@/store/book"
import category from "@/store/category";

Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
      user, book, category
   }
})
