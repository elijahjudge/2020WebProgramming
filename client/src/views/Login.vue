<template>
<form style="margin-right: 500px; margin-top: 10px">


    
   <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success" @click.prevent="login">
      Login
    </button>
  </p>
</div>
</form>
</template>

<script>

import session from "@/models/session";

export default {
    methods: {
        login(){
            session.user = {
                name: 'baby pigeon',
                handle: 'bpbpbp',
                profile: 'https://2.bp.blogspot.com/-y40K6_fEx5o/VkoK2OgT11I/AAAAAAAAA8o/6PY_stcfe-g/s1600/photo2.jpg'
        
            }
            session.addNotification('GoodLogin ;)', 'success')
            this.$router.push('Feed')
        }
    }
}
</script>



<style>

</style>