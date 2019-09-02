<template>
  <nav class="m-navBar">
    <div class="navWrapper">
      <a class="navButton" @click.prevent="filterBy('')">☕</a>
      <a class="navButton" @click.prevent="filterBy('entry')">Posts</a>
      <a class="navButton" @click.prevent="filterBy('podcast')">Podcast</a>
      <a class="navButton alignRight" @click.prevent="toggleDarkmode">💡</a>
      <!--  <div class="searchBar">
        <input type="search" class="searchInput" v-model="searchParams.searchTerm" v-on:search="searchByFirebase" placeholder="Buscar..." incremental="true" autosave="search" results="3">
        <a href="#" v-on:click.prevent="search">🔍</a>
      -->
    </div>
    </div>
  </nav>
</template>

<script>
/* eslint-disable no-console */

import { mapMutations } from 'vuex'
import { fireDb } from '~/plugins/firebase.js'

export default {
  data () {
    return {
      searchParams: {}
    }
  },

  methods: {
    ...mapMutations({
      toggleDarkmode: 'toggleDarkmode',
      setPosts: 'posts/setPosts'
    }),

    filterBy (type) {
      if (this.searchParams.type === type) {
        // this.searchParams.type = '';
        return false
      } else {
        this.searchParams.type = type
      }

      this.getPosts(this.searchParams)
    },

    getPosts (searchParams) {
      const vm = this

      // const postsRef = fireDb.collection("posts").orderBy('date', 'desc');
      let postsRef = fireDb.collection('posts')

      if (searchParams && searchParams.type) {
        postsRef = postsRef.where('type', '==', searchParams.type)
      }

      if (searchParams && searchParams.searchTerm) {
        postsRef = postsRef.where('title', '>=', searchParams.searchTerm).where('title', '<=', searchParams.searchTerm + '\uF8FF')
      }

      const callback = (querySnapshot) => {
        this.loading = false

        const postsList = []
        console.log(querySnapshot)

        querySnapshot.docs.forEach((doc) => {
          const postData = doc.data()
          postData.date = postData.date ? postData.date.toDate() : new Date()

          console.log(postData)

          postsList.push(postData)
        })

        // Ordered by date. Recent first.
        vm.setPosts(postsList.sort((a, b) => { return b.date - a.date }))
      }

      postsRef.onSnapshot(callback)
    },

    mounted () {
      this.getPosts()
    }
  }
}
</script>
