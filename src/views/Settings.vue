<template>
  <div class="settings">
    <h2>Coming Soon!</h2>
    <h4>Version {{appVersion}}</h4>
    <h5>This web app was produced by iTeam, a technology service club at LCHS.</h5>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  public appVersion = `v${process.env.VUE_APP_VERSION} (b${process.env.VUE_APP_COMMIT_COUNT.trim()}#${process.env.VUE_APP_COMMIT_SHASH.trim()})`
}
</script>