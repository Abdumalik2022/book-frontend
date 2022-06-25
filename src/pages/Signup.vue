<template>
   <div class="container-fluid">
      <div class="row justify-content-start">
         <div class="card border-secondary mb-3 col-9">
            <div class="card-header p-3"><b>Signup</b></div>
            <div class="card-body text-secondary">
               <form @submit.prevent="signup">
                  <div class="mb-3">
                     <label class="form-label" for="exampleInputEmail1">Email Address</label>
                     <input id="exampleInputEmail1" v-model="form.email" class="form-control" type="text">
                  </div>
                  <div class="mb-3">
                     <label class="form-label" for="exampleInputEmail2">Password</label>
                     <input id="exampleInputEmail2" v-model="form.password" class="form-control" type="text">
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
   name: "Sign-up",
   data() {
      return {
         form: {
            email: '',
            password: ''
         }
      }
   },
   methods: {
      ...mapActions(['addUser']),
      signup() {
         this.addUser(this.form)
            .then(() => {
               console.log('The User inserted successfully')
               this.$router.push('/login')
            })
            .catch(() => {
               console.log('Something went wrong with adding user')
               this.$router.push('/login')
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