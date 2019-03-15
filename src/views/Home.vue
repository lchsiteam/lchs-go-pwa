<template>
  <div class="home">
    <div class="sub-nav">
      <router-link class="sub-nav-item" to="/home" exact>Now</router-link>
      <router-link class="sub-nav-item" to="/home/schedule">Bell Schedule</router-link>
    </div>
    <router-view></router-view>
    <p>Have feature suggestions? Send us a quick email at <a class="a" href="mailto:team@lciteam.club">team@lciteam.club</a>.</p>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding: 0 20px;
}
.cd-num {
  font-size: 36px;
}
.cd-txt {
  font-size: 18px;
  margin-left: 8px;
}
.cd-txt-h {
  font-size: 14px;
  font-weight: 400;
}

.grid-fmr {
  text-align: left;
  margin: 10px auto;
  padding: 6px 10px;
  background-color: rgba(0, 0, 0, .1);
  border: 1px solid rgba(0, 0, 0, .3);
}

.grid-fmr-helper {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.6;
}

.grid-fmr-value {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

@keyframes blinking {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.cd-blink {
  animation: blinking 1s ease-in-out infinite;
}

a.a {
  color: rgb(168, 230, 255);
}
</style>
