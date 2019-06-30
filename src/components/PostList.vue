<template>
  <section class="post-list">
    <h2 class="post-list__title">Sortable Post List</h2>
    <ul class="post-list__list">
      <post-list-item></post-list-item>
      <post-list-item></post-list-item>
    </ul>
  </section>
</template>
<script>
import PostListItem from "./PostListItem.vue";
export default {
  components: {
    PostListItem
  }
};
</script>

<style lang="scss" scoped>
.post-list {
}

.post-list__title {
  color: white;
}

.post-list__list {
  padding: 0;
  list-style: none;
  margin: 0;
}
</style>
