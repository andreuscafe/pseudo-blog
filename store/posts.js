export const state = () => ({
  posts: []
})

export const mutations = {
  add (state, post) {
    state.posts.push(post)
  },
  remove (state, { post }) {
    state.posts.splice(state.posts.indexOf(post), 1)
  },
  setPosts (state, posts) {
    state.posts = posts
  }
  // toggle (state, post) {
  //   post.done = !post.done
  // }
}
