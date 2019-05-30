<template>
  <div class="welcome">
    <h1>Welcome to LCHS Go</h1>
    <h4>You must sign-in to continue</h4>
    <h3>Students and Teachers | Sign in with your school account below</h3>
    <h3>Parents | Select the grade level(s) of your child/children</h3>
    <div v-for='grade in allGrades' :key='grade'> 
      <input v-model='rawInput' type='checkbox' :id="`grade${grade}`" :value='grade'>{{grade}}th Grade
    </div> 
    <!--
    <input v-model="rawInput" type="checkbox" id="grade7" :value='7'>7th Grade
    <input v-model="rawInput" type="checkbox" id="grade8" :value='8'>8th Grade
    <br>
    <input v-model="rawInput" type="checkbox" id="grade9" :value='9'>9th Grade
    <input v-model="rawInput" type="checkbox" id="grade10" :value='10'>10th Grade
    <br>
    <input v-model="rawInput" type="checkbox" id="grade11" :value='11'>11th Grade
    <input v-model="rawInput" type="checkbox" id="grade12" :value='12'>12th Grade
    <br><br>
    --> 
    <button @click="saveInput()" :disabled="!buttonOn(rawInput)">Submit</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'; 
import { allGrades } from '@/schedule'; 

@Component({})
export default class Welcome extends Vue {
  //this is a class variable
  allGrades = allGrades; 
  rawInput: number[] = []
  currentInput: number[] = []

  updateOptionBL(name: string, value: any): void {
    this.$store.commit('UPDATE_SETTING', { name, value }); 
  }
  
  saveInput() {
		if (this.buttonOn(this.rawInput)) {
			this.currentInput = this.rawInput
			this.updateOptionBL('gradeInput', this.currentInput); 
		}
  }

  buttonOn(input: number[]) {
    return (input.length >= 1)
	}

  mounted() {
		this.rawInput = this.$store.state.settings.gradeInput; 
		this.saveInput()
	}
}
</script>
