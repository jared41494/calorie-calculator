<template>
  <b-container id="app">
    <h1>
      Calorie Calculator
    </h1>
    <p>
      Welcome to the calorie calculator! This application attempts to aid you in your fitness journey by calculating your BMI, BMR and TDEE.<br />
      <span class="font-weight-bold text-uppercase">Note</span> I am not a doctor! Therefore, this application is not intended to diagnose a health problem. This application is merely a prototype, to showcase my web developer skills.
    </p>
    <UserInput :user="user" v-on:passUser="passUser" />
    <MetabolicDisplay :user="user" v-show="user.show" />
  </b-container>
</template>

<script>
import UserInput from './components/UserInput.vue'
import MetabolicDisplay from './components/MetabolicDisplay.vue'

export default {
  name: 'app',
  data () {
    return {
      user: {
        weight: 0,
        height: 0,
        age: 0,
        gender: 1,
        activityLevel: 1,
        show: false
      }
    }
  },
  components: {
    UserInput,
    MetabolicDisplay
  },
  methods: {
    passUser (user) {
      this.user = user
      this.user.show = true
    }
  }
}
</script>

<style lang="scss">

</style>
