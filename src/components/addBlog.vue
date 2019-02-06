<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Sports</label>
        <input type="checkbox" value="sports" v-model="blog.categories"/>
        <label>Books</label>
        <input type="checkbox" value="books" v-model="blog.categories"/>
        <label>Food</label>
        <input type="checkbox" value="food" v-model="blog.categories"/>
        <label>Travel</label>
        <input type="checkbox" value="travel" v-model="blog.categories"/>
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="(author, index) in authors" :key="index"> {{ author }}</option>
      </select>
      <button v-on:click.prevent="post"> Add Blog </button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
        <p>Blog Title: {{ blog.title }}</p>
        <p>Blog Content: </p>
        <p>{{ blog.content }}</p>
        <p>Blog Categories</p>
        <ul>
          <li v-for="(category, index) in blog.categories" :key="index"> {{ category }} </li> 
        </ul>
        <p>Author: {{blog.author}}</p>

    </div>
  </div>
</template>

<script>



export default {

  data () {
    return {
      blog: {
        title:"",
        content:"",
        categories:[],
        author: ""
         },
         authors: ['Angie', 'Marcus', 'Whoevers wants to write'],
         submitted:false 
      }
  },
  methods:{
    post: function(){
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userid: 1
    }).then(function(data){
      console.log(data);
      this.submitted = true;
    });
  }
}
}
</script>

<style>


#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin:20px 0 10px;
}
input[type="text"], textarea{
  display:block;
  width:100%;
  padding:8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 20px 0;
}
h2{
  text-align: center;
}

#checkboxes input{
  display: inline-block;
  margin-right:10px;
}
#checkboxes label{
  display: inline-block;
}


</style>
