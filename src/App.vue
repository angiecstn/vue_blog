<template>
<div>
    <app-header></app-header>
    <add-blog></add-blog>
    <router-view></router-view>
    <list-blogs></list-blogs>
    <app-footer></app-footer>
 
</div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'


export default {
 components: {
   'app-header': Header,
   'app-footer': Footer,
   'add-blog': addBlog,
   'show-blogs': showBlogs,
   'list-blogs': listBlogs
 },
  data () {
    return {
  
    }
  },
  methods:{

  }
}
</script>

<style>

body{
  margin: 0;
  padding: 20px;
  font-family: 'Nunito SemiBold';
}
</style>
