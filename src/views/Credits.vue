<template>
  <div class="credits">
    <h1>Share this app with your friends!</h1>
    <h4>Scan this QR code below with the Camera app:</h4>
    <img src="../assets/qrcode.png"/>
    <h4>Or head directly to:</h4>
    <h2>go.lciteam.club</h2>
    <h5>This web app was produced by iTeam, a technology service club at LCHS.</h5>
    <div>
      <div class="credit-item-container">
        <div class="credit-item">Kai Bredemann (kbredemann22)</div>
        <div class="credit-item-role">Original Script, Chrome Extension</div>
      </div>
      <div class="credit-item-container">
        <div class="credit-item">Kevin Mo (kmo19)</div>
        <div class="credit-item-role">Advisor, Web App, Refactor</div>
      </div>
      <div class="credit-item-container">
        <div class="credit-item">Devyn Oh (doh22)</div>
        <div class="credit-item-role">Core Contributor</div>
      </div>
      <div class="credit-item-container">
        <div class="credit-item">Cassie Eisen (ceisen22)</div>
        <div class="credit-item-role">Core Contributor, Theme Artist</div>
      </div>
      <div class="credit-item-container">
        <div class="credit-item">Ryan King (rking21)</div>
	      <div class="credit-item-role">Core Contributor, Theme Animator</div>
      </div>
      <div id='game'></div>
      <div class="credit-item-container">
        <div class="credit-item">Bryan Wang (bwang21)</div>
        <div class="credit-item-role">Core Contributor</div>
      </div>
      <div class="credit-item-container">
        <div class="credit-item">Ean Jeffries (ejeffries22)</div>
        <div class="credit-item-role">Core Contributor</div>
      </div>
    </div>
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

.credit-item-container {
  margin: 8px 0;
}

.credit-item {
  font-weight: 600;
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

.credit-item-role {
  font-size: 12px;
  opacity: 0.8;
}
</style>
