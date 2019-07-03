<template>
  <section class="post-list">
    <h2 class="post-list__title">Sortable Post List</h2>
    <ul class="post-list__list">
      <post-list-item
        v-for="(post, index) in posts"
        :key="post.id"
        :title="post.title"
        :isFirstItem="index === 0"
        :isLastItem="index === posts.length - 1"
      ></post-list-item>
    </ul>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import PostListItem from "./PostListItem.vue";

export default {
  components: {
    PostListItem
  },
  methods: {
    ...mapActions(["fetchPosts"])
  },
  computed: mapGetters(["posts"]),
  mounted() {
    this.fetchPosts();
  }
};
</script>

<style lang="scss" scoped>
.post-list {
  &__title {
    color: white;
  }

  &__list {
    padding: 0;
    list-style: none;
    margin: 0;
  }
}
</style>
