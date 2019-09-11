<template>
  <div class="virtual_id">
    <h1>Virtual ID Card</h1>
    <h3>Enter your ID Number and Click Submit</h3>
    ID Number: <input v-model="rawInput" type="text" id="idnumber"><button @click="saveInput()" :disabled="!validNumber(rawInput)">Submit</button> 
    <h2 id="message">{{getMessage()}}</h2>
    <img v-if='shouldShow' id="barcode" :src="getBarcodeUrl() " width="304" height="80">
		<br>
		<b>ID NUMBER: {{currentInput}}</b>
    <h4>INFORMATION</h4>
    <p>The Virtual ID is a simple way for students to have access to their ID Card. Since it only requires opening the LCHS Go page, you can access your student ID faster than you can access a photo on your phone, or your physical ID card.</p>
    <p>The Virtual ID can be used for everything including signing in to the IRC checking out devices from the Help Lab, or anything that would require your normal ID card.</p>
    <h5>A note about Privacy</h5>
    <p>This app remembers your ID number for your convenience. The LCHS Go Team has no access to your ID information. </p> 
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class VirtualID extends Vue {
  rawInput: any = '';
  currentInput: any = '';
  shouldShow: boolean = false;

  updateOptionBL(name: string, value: any): void {
    this.$store.commit('UPDATE_SETTING', { name, value });
  }

  saveInput() {
    if (this.validNumber(this.rawInput)) {
      this.shouldShow = true;
      this.currentInput = this.rawInput;
      this.updateOptionBL('idInput', this.currentInput);
    }
  }

  validNumber(idNumber: any) {
    return idNumber.length === 5 && !isNaN(idNumber);
  }

  getMessage() {
    if (this.currentInput.length === 0) { return ''; }
    return this.validNumber(this.currentInput) ? 'Your ID Barcode' : 'Please enter a valid ID number';
  }

  getBarcodeUrl() {
    if (!this.validNumber(this.currentInput)) { return ''; }
    return `http://www.barcodes4.me/barcode/c39/${this.currentInput}.png`;
  }

  mounted() {
    this.rawInput = this.$store.state.settings.idInput;
    this.saveInput();
  }
}
</script>

