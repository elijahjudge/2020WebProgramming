<template>
  <div class="page">
      <h2 class="title is-2">Feed Page</h2>

    <div class="columns">

        <div class="column is-two-thirds">
            <Posts /> <Posts /> <Posts /> <Posts />
        </div>

        <div class="column is-one-third">
            <Sidebar /> <Posts />
        </div>

    </div>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import Posts from "@/components/Posts";


export default {
    components:{
        Sidebar, Posts
    }
}
</script>

<style>
    .card{
        margin-top: 15px;
    }
</style>