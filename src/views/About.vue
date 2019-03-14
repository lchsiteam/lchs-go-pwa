<template>
  <div class="about">
    <div class="sub-nav">
      <router-link class="sub-nav-item" to="/about/credits">Credits</router-link>
      <router-link class="sub-nav-item" to="/about/settings">Settings</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  public appVersion = `v${process.env.VUE_APP_VERSION} (b${process.env.VUE_APP_COMMIT_COUNT.trim()}#${process.env.VUE_APP_COMMIT_SHASH.trim()})`
}
</script>

<style lang="scss">
.about {
  padding: 0 20px;
}

.credit-item:before, .credit-item:after {
  content: '';
  display: inline-block;
  background-color: #2c3e50;
  width: 6px;
  height: 6px;
  border-radius: 4px;
  margin-right: 10px;
  vertical-align: middle;
}

.credit-item:after {
  margin-left: 10px;
  margin-right: 0;
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
