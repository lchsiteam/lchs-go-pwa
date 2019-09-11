<template>
  <div class="about">
    <div class="sub-nav">
      <router-link class="sub-nav-item" to="/about/credits">Credits</router-link>
      <router-link class="sub-nav-item" to="/about/changelog">Log</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  public appVersion = `v${process.env.VUE_APP_VERSION} (b${process.env.VUE_APP_COMMIT_COUNT.trim()}#${process.env.VUE_APP_COMMIT_SHASH.trim()})`;
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
</style>
