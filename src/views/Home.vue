<template>
  <div class="hello">
    <div v-for='post in posts' v-bind:key="post.id" class="post">
      <Post v-bind:post="post"></Post>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Post from '@/components/Post.vue' // @ is an alias to /src

@Options({
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  mounted() {
    this.$store.dispatch('getPosts')
  },
  components: {
    Post
  }
})
export default class Home extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.hello {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
a {
  color: #42b983;
}
</style>
