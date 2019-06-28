<template>
  <div class="container metabolic-display-container">
    <h2>Results</h2>
    <p>
      Although not the best gauge of your health status if used solely, <span class="font-weight-bold">Body Mass Index</span>, or BMI, can be used, with other tools, to predict the liklihood of developing diseases or health issues like heart disease, obesity and high blood pressure.<br />
      <span class="font-weight-bold text-uppercase">Note </span> the BMI result in parentheses. This value can be underweight, normal weight, overweight and obese. 
    </p>
    <p>
      <span class="font-weight-bold">Basal Metabolic Rate</span>, or BMR, is the estimated amount of calories burned to maintain your current weight; in other words, to keep you alive, without regard to daily active. The Harris-Benedict equation is the formula being used.<br />
      <span class="font-weight-bold">Total daily energy expenditure</span> (TDEE) accounts for that daily activity. Therefore, to gain weight, you need to take in more calories than your TDEE. And vice versa, if you need to lose weight, your total calories must be less than your TDEE.
    </p>
    <b-row>
      <b-col sm="4">
        <p>
          <span class="font-weight-bold">Body Mass Index (BMI):</span><br/> 
          {{ bmi | twoDecimals }} ({{ bmiOutcome }})
        </p>
      </b-col>
      <b-col sm="4">
        <p>
          <span class="font-weight-bold">Basal Metabolic Rate (BMR):</span><br /> 
          {{ bmr | twoDecimals }} kcal
        </p>
      </b-col>
      <b-col sm="4">
        <span class="font-weight-bold">Total Daily Energy Expenditure (TDEE):</span><br /> 
        {{ tdee | twoDecimals }} kcal
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'MetabolicDisplay',
  props: ['user'],
  filters: {
    twoDecimals(val) {
      return val.toFixed(2)
    }
  },
  computed: {
    bmi: function() {
      return (703 * (this.user.weight / this.user.height ** 2))
    },
    bmiOutcome: function() {
      if (this.bmi < 18.5) {
        return "Underweight"
      } else if (this.bmi < 24.9) {
        return "Normal Weight"
      } else if (this.bmi < 29.9) {
        return "Overweight"
      } else if (this.bmi >= 30) {
        return "Obese"
      }

      return ''
    },
    bmr: function() {
      if (this.user.gender === 1) {
        return ((6.25 * this.user.weight) + (12.7 * this.user.height) - (6.76 * this.user.age) + 66)
      } else {
        return ((4.35 * this.user.weight) + (4.7 * this.user.height) - (4.68 * this.user.age) + 655)
      }
    },
    tdee: function() {
      if (this.user.activityLevel == 1) {
        return this.bmr * 1.2
      } else if (this.user.activityLevel == 2) {
        return this.bmr * 1.375
      } else if (this.user.activityLevel == 3) {
        return this.bmr * 1.55
      } else if (this.user.activityLevel == 4) {
        return this.bmr * 1.725
      } else if (this.user.activityLevel == 5) {
        return this.bmr * 1.9
      }

      return 0
    }
  }
}
</script>

<style scoped>

</style>
