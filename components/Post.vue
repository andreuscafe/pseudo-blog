<template>
  <article class="post">
    <header class="postHeader">
      <div class="postUserImg">
        <img :src="post.user.imgUrl" alt="Usuario" class="userImg">
      </div>
      <div class="postHeaderContent">
        <div class="headerMetadata">
          <span class="userName">{{ post.user.name }},</span>
          <time class="postTime">{{ timeAgo(post.date) }}</time>
        </div>
        <h2 class="postTitle">
          {{ post.title }}
        </h2>
      </div>
    </header>

    <div v-if="!!post.body.content" class="postContent" v-html="post.body.content" />

    <div v-if="!!post.body.embed" class="postEmbed" v-html="post.body.embed" />
  </article>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  props: {
    post: Object
  },

  computed: {
    posts () {
      return this.$store.state.posts.posts
    }
  },

  mounted () {
    console.log(DateTime.local().minus({ hours: 35 }).toRelative(new Date()))
  },

  methods: {
    timeAgo (date) {
      return DateTime.local().toRelative(date)
    }
  }
}
</script>
