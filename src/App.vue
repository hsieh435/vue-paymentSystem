<template>
  <!-- <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/">LoginPage</router-link> |
    <router-link to="/loginpage2">LoginPage2</router-link> |
    <router-link to="/loginpage3">LoginPage3</router-link> |
    <router-link to="/LoadingEffect">LoadingEffect</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding-top: 30px;
  z-index: 10;
  // outline:1px solid black;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color:rgb(46, 189, 89);
    }
  }
}
</style>
