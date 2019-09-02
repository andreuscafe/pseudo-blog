<template>
  <div class="postsList">
    <div v-if="isLoading" class="loading">
      Cargando posts...
    </div>

    <Post
      v-for="post in posts"
      :key="post.title"
      :post="post"
    />
  </div>
</template>

<script>
import Post from '~/components/Post.vue'

export default {
  components: {
    Post
  },

  props: {
    posts: Array
  },

  computed: {
    isLoading () {
      return !this.posts.length
    }
  },

  methods: {
  }
}
</script>
