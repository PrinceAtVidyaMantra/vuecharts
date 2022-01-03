<template>
  <div id="app">
    <v-row class="mt-10">
      <v-col cols="3" justify="center" align="center">
        <p class="text-h4 mt-6">Select a Timespan:</p>
      </v-col>
      <v-col cols="2">
        <v-select
          :items="years"
          v-model="year"
          class="ma-4 mt-6"
          solo
        >
        </v-select>
      </v-col>
      <v-col cols="2">
        <v-select
          :items="months"
          v-model="month"
          class="ma-4 mt-6"
          solo
        >
        </v-select>
      </v-col>
      <v-col cols="2">
        <v-select
          :items="days"
          v-model="day"
          class="ma-4 mt-6"
          solo
        >
        </v-select>
      </v-col>
    </v-row>
    <GChart type="ColumnChart" :data="getCurrentData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import { mapGetters } from 'vuex'
export default {
  name: "App",
  components: {
    GChart,
    
  },
  data() {
    return {
      day: "",
      month: "January",
      year: "2021",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      fieldsToShow: [],
      years:['2022', '2021'],
      
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      }
    };
  },
  computed: {
    // fields() {
    //   return this.$store.getters.getFields;
    // },
    // chartData(){
    //  return this.$store.getters.getCurrentData;
    // },
   ...mapGetters([
      'getCurrentData',
      'getFields',
      // ...
    ]),
    days(){
      const days = []
      for(let day = 1; day <=31; day++){
          days.push(day)
      }
      return days
    }
  },
  created() {
 
      this.$store.dispatch("setCurrentData")


    
    
  },
};
</script>
