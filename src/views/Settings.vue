<template>
  <div class="settings">
    <h2>App Settings</h2>
    <div class="settings-rows">
      <div class="settings-row">
        <div class="sr-head">
          <span class="sr-badge-new">NEW</span>
          <b class="sr-title">Time Display</b>
          <span class="sr-desc">Change between 12h and 24h time</span>
        </div>
        <div class="sr-option">12h / 24h</div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <span class="sr-badge-new">NEW</span>
          <b class="sr-title">Enable Animations</b>
          <span class="sr-desc">Toggle fancy blinking animations</span>
        </div>
        <div class="sr-option">Enable / Disable</div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Color Theme</b>
          <span class="sr-desc">Change app color scheme</span>
        </div>
        <div class="sr-option">Coming soon in v0.2.0!</div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">App Version</b>
          <span class="sr-desc">Please include the full version in bug reports</span>
        </div>
        <div class="sr-option">{{appVersion}}</div>
      </div>
    </div>
    
    <h5>This web app was produced by iTeam, a technology service club at LCHS.</h5>
  </div>
</template>

<style lang="scss">
.settings-rows {
  text-align: left;
}

.settings-row {
  padding: 10px 16px;
  border-radius: 4px;
  margin: 5px 0;
  cursor: default;
  
  &:hover {
    background-color: rgba(0, 0, 0, .04);
  }

  .sr-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .sr-title {
    color: rgba(255, 255, 255, 0.7);
    display: inline;
    font-size: 1.2em;
    margin-right: 8px;
  }

  .sr-badge-new {
    background-color: rgba(18, 15, 43, .3);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 2px;
    display: inline-block;
    font-size: 10px;
    padding: 2px 6px;
    margin-right: 8px;
  }

  .sr-desc {
    font-size: 0.9em;
    display: inline;
    color: rgba(255, 255, 255, 0.7);
  }

  .sr-option {
    font-weight: 600;
    margin: 8px 0;
  }
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  public appVersion = `v${process.env.VUE_APP_VERSION} (b${process.env.VUE_APP_COMMIT_COUNT.trim()}#${process.env.VUE_APP_COMMIT_SHASH.trim()})`
}
</script>