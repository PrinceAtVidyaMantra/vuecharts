<template>
  <div id="app">
    <SelectionPane />
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import SelectionPane from '../components/SelectionPane.vue';
export default {
  name: "App",
  components: {
    GChart,
    SelectionPane,
  },
  data() {
    return {
      
      
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
      todaysRecord: null,
    };
  },
  computed: {
    fields() {
      return this.$store.state.fields;
    },
    chartData(){
     return this.$store.getters.getCurrentData;
    }
  },
  created() {
      this.$store.dispatch("setCurrentData")


    
    
  },
};
</script>
