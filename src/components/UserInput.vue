<template>
  <div class="container user-input-container">
    <h2>User Information</h2>
    <p>
      Please, enter your weight, height, age and gender and click the 'Calculate' button to see these values.
    </p>
    <b-form @submit.prevent="passUser">
      <b-row>
        <b-col sm="6">
          <label for="weight">Weight (lbs):</label>
          <b-form-input
            id="weight"
            v-model="user.weight"
            type="number"
            required
          ></b-form-input>
        </b-col>
        <b-col sm="6">
          <label for="height">Height (in):</label>
          <b-form-input
            id="height"
            v-model="user.height"
            type="number"
            required
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6">
          <label for="age">Age (whole years):</label>
          <b-form-input
            id="age"
            v-model="user.age"
            type="number"
            required
          ></b-form-input>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Gender">
            <b-form-radio-group
              v-model="user.gender"
              :options="genders"
              name="gender"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Activity Level">
            <b-form-radio-group
              v-model="user.activityLevel"
              :options="activityLevels"
              name="activityLevel"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button type="submit" variant="primary">Calculate</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'UserInput',
  props: {
    user: Object
  },
  data () {
    return {
      genders: [
        {text: 'Male', value: 1},
        {text: 'Female', value: 2}
      ],
      activityLevels: [
        {text: 'Sedentary', value: 1},
        {text: 'Lightly Active', value: 2},
        {text: 'Moderately Active', value: 3},
        {text: 'Very Active', value: 4},
        {text: 'Extremely Active', value: 5}
      ]
    }
  },
  methods: {
    passUser () {
      if (this.user.weight > 0 &&
          this.user.height > 0 &&
          this.user.age > 0) {
        this.$emit('passUser', this.user)
      }
    }
  }
}
</script>

<style scoped>

</style>


