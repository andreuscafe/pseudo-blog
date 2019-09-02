<template>
  <section class="appContent">
    <NavBar />
    <Header />
    <PostsList :posts="posts" />
  </section>
</template>

<script>
import { mapState } from 'vuex'

import Header from '~/components/Header.vue'
import NavBar from '~/components/NavBar.vue'
import PostsList from '~/components/PostsList.vue'

export default {
  components: {
    Header,
    NavBar,
    PostsList
  },

  computed: {
    ...mapState({
      posts: state => state.posts.posts
    })
  }
}
</script>

<style>
.appContent {
  max-width: var(--layoutWidth);
  margin: 0 auto 1rem;
  padding: 60px 0;
}
</style>
