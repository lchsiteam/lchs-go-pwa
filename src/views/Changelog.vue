<template>
  <div id="changelog">
    <div class="cl-readall" @click="$router.push('/home')">RETURN TO HOME</div>
    <div v-for="log in allLogs" :key="log.id" :class="{ 'cl-log-selection': true, 'selected': currentLogId === log.id }" @click="openCurrentLog(log.id)">
      <span class="cl-log-s-badge" v-if="$store.state.changelog.readUpdates.indexOf(log.id) === -1">NEW</span>
      <span class="cl-log-s-title">{{log.title}}</span>
    </div>
    <div class="cl-readall" @click="updateAllRead()">MARK ALL AS READ</div>
    <div v-if="currentLog" class="cl-log">
      <div class="cl-log-title">{{currentLog.title}}</div>
      <div class="cl-log-tagline">{{currentLog.tagline}}</div>
      <div class="cl-log-author">by {{currentLog.author}}</div>
      <div class="cl-log-content">
        <template v-for="(block, key) in currentLog.content">
          <a target="blank" :key="key" v-if="block.type === 'call-to-action'" class="cl-log-tx-cta" :href="block.url">{{block.text}}</a>
          <img :key="key" v-else-if="block.type === 'image'" class="cl-log-tx-img" :src="block.url"/>
          <div v-else :key="key" :class="'cl-log-tx-' + block.type">
            {{block.text}}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#changelog {
  text-align: left;
  padding: 20px 0;
}

.cl-readall {
  background: rgba(0, 0, 0, .1);
  cursor: pointer;
  border-radius: 2px;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  transition: 100ms ease;

  &:hover { background: rgba(0, 0, 0, .15); }
  &:active { background: rgba(0, 0, 0, .25); transition: none; }
}

.cl-log-selection {
  border-radius: 4px;
  background: #eaeaea;
  color: #222;
  box-shadow: 0 4px 16px 4px rgba(100, 100, 100, .1);
  margin: 10px 0;
  padding: 12px 20px;
  transition: 100ms ease;
  cursor: pointer;

  &:hover { background: #dddddd; }
  &.selected {
    background: var(--button-submenu-color);
    color: #ffffff;
  }
}

.cl-log-s-badge {
  border-radius: 2px;
  color: #efefef;
  font-size: 12px;
  padding: 2px 8px;
  margin-right: 10px;
  background: var(--button-submenu-color);
}

.cl-log {
  margin: 20px 0;
}

.cl-log-title {
  font-size: 2em;
  font-weight: 700;
  margin: 5px 0;
}

.cl-log-tagline {
  font-size: 1.2em;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
  margin: 5px 0;
}

.cl-log-author {
  color: rgba(255, 255, 255, 0.8);
  margin: 8px 0;
}

.cl-log-tx-cta {
  background: rgba(255, 255, 255, .25);
  box-sizing: border-box;
  display: block;
  border-radius: 2px;
  font-weight: 700;
  margin: 10px;
  padding: 8px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  transition: 100ms ease;

  &:hover {
    background: rgba(255, 255, 255, .15);
  }
}

.cl-log-tx-img {
  display: block;
  max-width: 80%;
  margin: 20px auto;
}

.cl-log-tx-text {
  margin: 12px 0;
  line-height: 1.5;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Changelog } from '../changelog';

@Component({})
export default class ChangelogPage extends Vue {
  allLogs: any[] = [];
  currentLog: any = null;
  currentLogId: number = 0;

  updateAllRead() {
    this.$store.commit('SET_READ_PROGRESS', this.allLogs.map((l) => l.id));
  }

  updateRead(id: number) {
    this.$store.commit('UPDATE_READ_PROGRESS', id);
  }

  openCurrentLog(id: number) {
    if (this.currentLogId === id) {
      // user un-clicks the announcement
      this.currentLogId = 0;
      this.currentLog = null;
    } else {
      this.currentLogId = id;
      this.currentLog = this.allLogs.find((l) => l.id === id);
      this.updateRead(id);
    }
  }

  mounted() {
    Changelog.forEach((version) => {
      this.allLogs = this.allLogs.concat(version.entries);
    });
    this.allLogs = this.allLogs.filter((log) => log.isPublic);
  }
}
</script>
