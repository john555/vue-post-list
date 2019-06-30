<template>
  <li class="action-list-item">
    <span class="action-list-item__action"
      >Moved Post 1 from index 2 to index 1</span
    >
    <button class="action-list-item__button">Time Travel</button>
  </li>
</template>

<style lang="scss" scoped>
.action-list-item {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.action-list-item + .action-list-item {
  border-top: 1px solid #e1e1e1;
}

.action-list-item__button {
  background-color: #02ff86;
  padding: 1rem 2rem;
  font: inherit;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  border: 0;
}
</style>
