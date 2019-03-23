<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Now</router-link>
      <!-- <router-link to="/today">Today</router-link> -->
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
html, body {
  background: linear-gradient(to bottom, #42b983, #2f9768);
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Niramit', Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  color: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 40px;
}

#nav {
  padding: 30px;
  a {
    background-color: #2c3e50;
    display: inline-block;
    padding: 16px 30px;
    font-weight: bold;
    color: rgb(155, 179, 202);
    border-radius: 4px;
    text-decoration: none;
    vertical-align: middle;
    margin: 10px;
    box-shadow: 0 4px 16px 8px rgba(0, 0, 0, .15);
    transition: 150ms ease;

    &:before {
      display: inline-block;
      margin-left: -10px;
      margin-right: 15px;
      content: '';
      height: 24px;
      width: 8px;
      border-radius: 4px;
      background-color: #162636;
      vertical-align: middle;
      transition: 150ms ease;
    }

    &.router-link-active {
      color: #fff;

      &:before { background-color: #95c3f0; }
    }
  }
}


.sub-nav-item {
  background-color: transparent;
  border-radius: 2px;
  font-size: 14px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 5px;
  padding: 6px 16px;
  transition: 150ms ease;

  &:hover {
    background-color: rgba(#2f9768, .4);
  }

  &.router-link-exact-active {
    background-color: #2f9768;
    box-shadow: 0 0 8px 4px rgba(100, 100, 100, .1);
  }
}
</style>
