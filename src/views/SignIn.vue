<template>

  <div class="Sign">
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
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

.Sign {
  text-align: left;
    margin: 10px auto;
    padding: 6px 10px;
    background-color: rgba(0,0,0,.1);
    border: 1px solid rgba(0,0,0,.3);
    position: relative;

}

.firebaseui-idp-icon {
    border: none;
    display: inline-block;
    height: 18px;
    vertical-align: middle;
    width: 18px;
}

.firebaseui-idp-button {
    direction: ltr;
    font-weight: 500;
    height: auto;
    line-height: normal;
    max-width: 220px;
    min-height: 40px;
    padding: 8px 16px;
    text-align: left;
    width: 100%;
}

.firebaseui-idp-text {
    color: #fff;
    display: table-cell;
    font-size: 14px;
    padding-left: 16px;
    text-transform: none;
    vertical-align: middle;
}

.firebaseui-idp-text.firebaseui-idp-text-long {
    display: table-cell;
}

.firebaseui-idp-google>.firebaseui-idp-text {
    color: #757575;
}

.mdl-button--raised {
    background: rgba(158,158,158,.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}

.mdl-button {
    background: 0 0;
    border: none;
    border-radius: 2px;
    color: #000;
    position: relative;
    height: 36px;
    margin: 0;
    min-width: 64px;
    padding: 0 16px;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0;
    overflow: hidden;
    will-change: box-shadow;
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
    outline: 0;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle;
}

.firebaseui-idp-google, .firebaseui-idp-google:hover, .mdl-button.firebaseui-idp-google:active, .mdl-button.firebaseui-idp-google:focus {
    background-color: #fff;
}

.firebaseui-idp-list>.firebaseui-list-item {
    margin-bottom: 15px;
    text-align: center;
}

.firebaseui-list-item {
    direction: ltr;
    margin: 0;
    padding: 0;
    text-align: left;
}

.firebaseui-idp-list {
    list-style: none;
    margin: 1em 0;
    padding: 0;
}

.firebaseui-container {
    background-color: rgba(0,0,0,0);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    color: rgba(0,0,0,.87);
    direction: ltr;
    font: 16px Roboto,arial,sans-serif;
    margin: 0 auto;
    max-width: 360px;
    overflow: visible;
    position: relative;
    text-align: left;
    width: 100%;
}

.firebaseui-provider-sign-in-footer>.firebaseui-tos {
    text-align: center;
}

.firebaseui-tos {
    color: #ffffff;
    direction: ltr;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 24px;
    margin-top: 0;
    text-align: left;
}

.firebaseui-idp-button {
    direction: ltr;
    font-weight: 500;
    height: auto;
    line-height: normal;
    max-width: 220px;
    min-height: 40px;
    padding: 8px 16px;
    text-align: left;
    width: 100%;
}

.firebaseui-idp-text.firebaseui-idp-text-short {
    display: none;
}

.firebaseui-idp-icon-wrapper {
    display: table-cell;
    vertical-align: middle;
}





</style>






<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Changelog } from '../changelog';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

@Component({})
export default class ChangelogPage extends Vue {
  allLogs: any[] = []
  currentLog: any = null
  currentLogId: number = 0

  updateAllRead() {
    this.$store.commit('SET_READ_PROGRESS', this.allLogs.map(l => l.id))
  }

  updateRead(id: number) {
    this.$store.commit('UPDATE_READ_PROGRESS', id)
  }

  openCurrentLog(id: number) {
    if (this.currentLogId === id) {
      // user un-clicks the announcement
      this.currentLogId = 0
      this.currentLog = null
    } else {
      this.currentLogId = id;
      this.currentLog = this.allLogs.find(l => l.id === id);
      this.updateRead(id)
    }
  }

  mounted() {
    Changelog.forEach(version => {
      this.allLogs = this.allLogs.concat(version.entries)
    })
    this.allLogs = this.allLogs.filter(log => log.isPublic) 
  }
}


/* Google Sign In */

 



// FirebaseUI config.
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult: any, redirectUrl: any) {
      var user = authResult.user;
      var credential = authResult.credential;
      var isNewUser = authResult.additionalUserInfo.isNewUser;
      var providerId = authResult.additionalUserInfo.providerId;
      var operationType = authResult.operationType;

      var userEmail = user.email;

      var isLcusd = userEmail.indexOf("lcusd.net")

      if (isLcusd == -1) {
        user.delete();
              
        return false;
             
      } else {
        return true;
      }
            
      return false;
    },
  signInFailure: function(error: any) {
    // Some unrecoverable error occurred during sign-in.
    // Return a promise when error handling is completed and FirebaseUI
    // will reset, clearing any UI. This commonly occurs for error code
    // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
    // occurs. Check below for more details on this.
    return handleUIError(error);
  },
  uiShown: function() {
    // The widget is rendered.
    // Hide the loader.
    (document.getElementById('loader') as any).style.display = 'none';
  }
},
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  // Query parameter name for mode.
  queryParameterForWidgetMode: 'mode',
  // Query parameter name for sign in success url.
  queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: "home",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: 'termsOfService.html',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('privacyPolicy.html');
  }
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig); 

function handleUIError (error: any) {
  console.log(error)
  return Promise.reject(error)
}

/* Google Sign In */


</script>
