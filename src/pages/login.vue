<template>
   <div>
      <div class="container-fluid">
         <div class="row justify-content-start">
               <div class="card border-secondary mb-3 col-9">
                  <div class="card-header p-3"><b>Login</b></div>
                  <div class="card-body text-secondary">
                     <form @submit.prevent="auth">
                        <div class="mb-3">
                           <label class="form-label" for="exampleInputEmail">Email address</label>
                           <input id="exampleInputEmail" aria-describedby="emailHelp" class="form-control" type="text"
                                  v-model="form.email">
                        </div>
                        <div class="mb-3">
                           <label class="form-label" for="exampleInputPassword2">Password</label>
                           <input id="exampleInputPassword2" class="form-control" type="password" v-model="form.password">
                        </div>
                        <div class="mt-4">
                           <p class="text-dark">Don't have an account?
                              <router-link to="/signup"><span style="text-decoration: none">Signup</span></router-link>
                           </p>
                        </div>
                        <button class="btn btn-primary" type="submit">Submit</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
   name: "log-in",
   data() {
      return {
         form: {
            email: '',
            password: ''
         }
      }
   },
   methods: {
      ...mapActions(['fetchToken', 'fetchCategory']),
      auth() {
         this.fetchToken(this.form)
         .then(() => {
            console.log('You successfully authorised')
            this.$router.push('/books')
            this.fetchCategory()
         })
         .catch(() => {
            console.log('Check your credentials')
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