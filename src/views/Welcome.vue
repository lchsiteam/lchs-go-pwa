<template>
  <div class="welcome">
    <h1>Welcome to LCHS Go</h1>
    <h4>You must sign-in to continue</h4>
    <h3>Students and Teachers | Sign in with your school account below</h3>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
    <h3>Parents | Select the grade level(s) of your child/children</h3>
    <!--
    <div v-for='grade in allGrades' :key='grade'> 
      <input v-model='rawInput' type='checkbox' :id="`grade${grade}`" :value='grade'>{{grade}}th Grade
    </div> 
    -->
    <input v-model="rawInput" type="checkbox" id="grade7" :value='7'>7th Grade
    <input v-model="rawInput" type="checkbox" id="grade8" :value='8'>8th Grade
    <br>
    <input v-model="rawInput" type="checkbox" id="grade9" :value='9'>9th Grade
    <input v-model="rawInput" type="checkbox" id="grade10" :value='10'>10th Grade
    <br>
    <input v-model="rawInput" type="checkbox" id="grade11" :value='11'>11th Grade
    <input v-model="rawInput" type="checkbox" id="grade12" :value='12'>12th Grade
    <br><br>
    <button @click="saveInput()" :disabled="!buttonOn(rawInput)">Submit</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { allGrades } from '@/schedule';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

@Component({})
export default class Welcome extends Vue {
  // this is a class variable
  public allGrades = allGrades;
  public rawInput: number[] = [];
  public currentInput: number[] = [];

  public updateOptionBL(name: string, value: any): void {
    this.$store.commit('UPDATE_SETTING', { name, value });
  }

  public saveInput() {
    if (this.buttonOn(this.rawInput)) {
      this.currentInput = this.rawInput;
      this.updateOptionBL('gradeInput', this.currentInput);
    }
  }

  public buttonOn(input: number[]) {
    return (input.length >= 1);
  }

  public mounted() {
    this.rawInput = this.$store.state.settings.gradeInput;
    this.saveInput();
  }
}

/* Google Sign In */

// FirebaseUI config.
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult: any, redirectUrl: any) {
      const user = authResult.user;
      const credential = authResult.credential;
      const isNewUser = authResult.additionalUserInfo.isNewUser;
      const providerId = authResult.additionalUserInfo.providerId;
      const operationType = authResult.operationType;
      const userEmail = user.email;
      const isLcusd = userEmail.indexOf('lcusd.net');
      if (isLcusd === -1) {
        user.delete();

        return false;

      } else {
        return true;
      }

      return false;
    },
  signInFailure(error: any) {
    // Some unrecoverable error occurred during sign-in.
    // Return a promise when error handling is completed and FirebaseUI
    // will reset, clearing any UI. This commonly occurs for error code
    // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
    // occurs. Check below for more details on this.
    return handleUIError(error);
  },
  uiShown() {
    // The widget is rendered.
    // Hide the loader.
    (document.getElementById('loader') as any).style.display = 'none';
  },
},
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  // Query parameter name for mode.
  queryParameterForWidgetMode: 'mode',
  // Query parameter name for sign in success url.
  queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'arg.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: 'termsOfService.html',
  // Privacy policy url/callback.
  privacyPolicyUrl() {
    window.location.assign('privacyPolicy.html');
  },
};
const ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
function handleUIError(error: any) {
  return Promise.reject(error);
}
/* Google Sign In */
</script>