<template>
  <div id="app">
    <post-list></post-list>
    <action-list></action-list>
  </div>
</template>

<script>
import PostList from "./components/PostList";
import ActionList from "./components/ActionList";

export default {
  name: "app",
  components: {
    PostList,
    ActionList
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  background: #f6f6f6;
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;

  &::before {
    content: "";
    display: block;
    height: 20rem;
    width: 150%;
    background: #6356b5;
    position: absolute;
    z-index: -1;
    transform-origin: 0 100%;
    transform: rotate(-8deg);
  }
}

.sr-hidden {
  position: absolute;
  width: 1px;
  height: 1rem;
  left: -999999px;
}

#app {
  display: grid;
  grid-template: repeat(1, auto) / repeat(2, minmax(30rem, 50%));
  grid-gap: 8.5rem;
  width: 80%;
  max-width: 1200px;
  margin: auto;
  padding-top: 4rem;
  align-items: start;
}
</style>
