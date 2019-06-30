<template>
  <section class="action-list">
    <h2 class="action-list__title">List of Actions Commited</h2>
    <div class="action-list__list-wrapper">
      <ul class="action-list__list">
        <action-list-item></action-list-item>
        <action-list-item></action-list-item>
      </ul>
    </div>
  </section>
</template>
<script>
import ActionListItem from "./ActionListItem";
export default {
  components: {
    ActionListItem
  }
};
</script>

<style lang="scss" scoped>
.action-list {
  background: white;
  border-radius: 0.4rem;
  box-shadow: 0.1rem 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
}

.action-list__title {
  padding: 2rem 2.5rem;
  margin: 0;
  font-size: 1.8rem;
}

.action-list__list-wrapper {
  padding: 2rem;
  background: #f2f2f2;
}

.action-list__list {
  margin: 0;
  padding: 0rem;
  list-style: none;
  background: white;
  box-shadow: 0.1rem 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
}
</style>
