<template>
  <div class="settings">
    <h2>App Settings</h2>
    <div class="settings-rows">
      <div class='settings-row'> 
        <div class='sr-head'>
          <span class="sr-badge-new">NEW</span>
          <b class='sr-title'>Grade Level</b> 
          <span class='sr-desc'>Change which grade is used for calculating schedules</span> 
        </div> 
        <div class='sr-option'>
          <select v-model="grade" @change="updateGrade()">
            <option v-for="grade in allGrades" :key="grade" :value="grade">{{grade}}th Grade</option> 
          </select>
        </div> 
      </div> 
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Time Display</b>
          <span class="sr-desc">Change between 12h and 24h time</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="updateOptionBL('useMilitaryTime', false)"
              :class="{selected: !this.$store.state.settings.useMilitaryTime}">12h</div>
            <div class="ex-selector-option" @click="updateOptionBL('useMilitaryTime', true)"
              :class="{selected: this.$store.state.settings.useMilitaryTime}">24h</div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <span class="sr-badge-new">NEW</span>
          <b class="sr-title">Enable Theme Animations</b>
          <span class="sr-desc">Toggle fancy color fading</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="updateOptionBL('enableThemeAnimations', true)"
              :class="{selected: this.$store.state.settings.enableThemeAnimations}">Enable</div>
            <div class="ex-selector-option" @click="updateOptionBL('enableThemeAnimations', false)"
              :class="{selected: !this.$store.state.settings.enableThemeAnimations}">Disable</div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Enable Blinking</b>
          <span class="sr-desc">Toggle fancy blinking animations</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="updateOptionBL('enableAnimations', true)"
              :class="{selected: this.$store.state.settings.enableAnimations}">Enable</div>
            <div class="ex-selector-option" @click="updateOptionBL('enableAnimations', false)"
              :class="{selected: !this.$store.state.settings.enableAnimations}">Disable</div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Show Hidden Periods</b>
          <span class="sr-desc">Show passing periods and times outside school on bell schedule</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="updateOptionBL('showExtraPeriods', true)"
              :class="{selected: this.$store.state.settings.showExtraPeriods}">Show</div>
            <div class="ex-selector-option" @click="updateOptionBL('showExtraPeriods', false)"
              :class="{selected: !this.$store.state.settings.showExtraPeriods}">Hide</div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <span class="sr-badge-new">NEW</span>
          <b class="sr-title">Color Theme (beta)</b>
          <span class="sr-desc">Change app color scheme. Send an email to team@lciteam.club for suggestions.</span>
        </div>
        <div class="sr-option">
          <select v-model="colorThemeId" @change="updateTheme()">
            <option v-for="theme in allThemes" :key="theme.id" :value="theme.id">{{theme.name}}</option>
          </select>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">App Version</b>
          <span class="sr-desc">Please include the full version in bug reports</span>
        </div>
        <div class="sr-option" style="cursor: text;">{{appVersion}}</div>
      </div>
    </div>
    
    <h5>This web app was produced by iTeam, a technology service club at LCHS.</h5>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Themes } from '../themes';

@Component({})
export default class Home extends Vue {
  public appVersion = `v${process.env.VUE_APP_VERSION} (b${process.env.VUE_APP_COMMIT_COUNT.trim()}#${process.env.VUE_APP_COMMIT_SHASH.trim()})`
  colorThemeId = this.$store.state.settings.colorTheme
  grade = this.$store.state.settings.grade
  allThemes: any[] = [] 
  allGrades: any[] = ['7', '8', '9-12'] 

  updateOptionBL(name: string, value: boolean): void {
    this.$store.commit('UPDATE_SETTING', { name, value })
  }

  updateTheme() {
    this.updateOptionBL('colorTheme', this.colorThemeId)
  } 
  
  updateGrade() {
    this.updateOptionBL('grade', this.grade); 
  } 

  mounted() {
    this.allThemes = Themes
  }
}
</script>

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
    color: rgba(255, 255, 255, 0.8);
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

.ex-selector {
  background: rgba(0, 0, 0, .08);
  display: inline-block;
  padding: 4px 4px;
  border-radius: 2px;

  .ex-selector-option {
    // background: rgba(0, 0, 0, .1);
    display: inline-block;
    padding: 4px 12px;
    margin: 0 2px;
    min-width: 80px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    transition: 100ms ease;
    color: rgba(255, 255, 255, 0.7);
    box-sizing: border-box;

    &:hover {
      background: rgba(0, 0, 0, .05);
    }
    &.selected {
      background: rgba(0, 0, 0, .2);
      cursor: default;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
