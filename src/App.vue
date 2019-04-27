<template>
  <div id="app-container" :style="getCSSColorScheme()" :class="{ toggleOff: !this.$store.state.settings.enableThemeAnimations }">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Themes } from './themes';
import { DateTime } from 'luxon';

@Component({})
export default class App extends Vue {
  getCurrentColorScheme() {
    return this.getColorSchemeFromId(this.$store.state.settings.colorTheme)
  }

  getColorSchemeFromId(themeId: string) {
    return Themes.filter(t => t.id === themeId)[0] || Themes[0]
  }

  getCSSColorScheme() {
    let themeGradientColors
    const currentColorScheme = this.getCurrentColorScheme()
    if (this.$store.state.settings.colorTheme === "theme15") {
      const currentDate = DateTime.local().setZone("America/Los_Angeles")
      switch(currentDate.hour) {
        case 5:
        case 6:
        case 7:
        case 8:
          themeGradientColors = this.getColorSchemeFromId("theme14").gradientColors
          break;
        case 9:
        case 10:
        case 11:
        case 12:
          themeGradientColors = this.getColorSchemeFromId("theme4").gradientColors
          break;
        case 13:
        case 14:
        case 15:
        case 16:
          themeGradientColors = this.getColorSchemeFromId("theme6").gradientColors
          break;
        case 17:
        case 18:
        case 19:
        case 20:
          themeGradientColors = this.getColorSchemeFromId("theme1").gradientColors
          break;
        case 21:
        case 22:
        case 23:
        case 0:
        case 24:
        case 1:
        case 2:
        case 3:
        case 4:
          themeGradientColors = this.getColorSchemeFromId("theme12").gradientColors
          break;
        default:
          themeGradientColors = this.getColorSchemeFromId("theme10").gradientColors
          break;
      }
    }
    else {
      themeGradientColors = currentColorScheme.gradientColors
    }
    return {
      '--gradient-colors': themeGradientColors.join(', '),
      '--button-menu-color': currentColorScheme.btnMenuColor,
      '--button-submenu-color': currentColorScheme.btnSubmenuColor,
      '--button-hover-color': currentColorScheme.btnHoverColor,
      '--gradient-count': currentColorScheme.gradientColors.length,
    }
  }
}
</script>


<style lang="scss">

@keyframes AnimatedTheme {
  0% { background-position: 50% 0%; }
  50% { background-position: 51% 100%; }
  100% { background-position: 50% 0%; }
}


html, body, #app-container {
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app-container {
  background: linear-gradient(to bottom, var(--gradient-colors, "#42b983, #2f9768"));
  background-size: 400% 400%;
  animation: AnimatedTheme 20s ease infinite;

  &.toggleOff {
    background-size: 100%;
    animation: none;
  }
}

#app {
  font-family: 'Niramit', Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 40px;
}

#nav {
  padding: 30px;
  a {
    background-color: var(--button-menu-color, #2c3e50);
    display: inline-block;
    padding: 16px 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    text-decoration: none;
    vertical-align: middle;
    margin: 8px;
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
      background-color: #1c1e20;
      vertical-align: middle;
      transition: 150ms ease;
    }

    &.router-link-active {
      color: #fff;

      &:before { background-color: #d5dee7; }
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
    background-color: var(--button-hover-color, rgba(#2f9768, .4));
  }

  &.router-link-exact-active {
    background-color: var(--button-submenu-color, #2f9768);
    box-shadow: 0 0 8px 4px rgba(100, 100, 100, .1);
  }
}
</style>
