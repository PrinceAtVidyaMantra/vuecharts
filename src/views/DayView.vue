<template>
  <div id="app">
    <SelectionPane />
    <GChart  v-if="chartData !== undefined" type="ColumnChart" :data="chartData" :options="chartOptions" />
    <h3 class="text-center text-h3 mt-16" v-else>No Records Found</h3>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import SelectionPane from "../components/SelectionPane.vue";
import { mapGetters } from "vuex";

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
    ...mapGetters(["years", "chartData", "months", "days"]),
  },
  created() {
    const date = new Date();
    const day = date.getDate() + 1;
    const month = date.getMonth();
    const year = date.getFullYear();

    this.$store.dispatch("fetchCurrentData", {
      year: year,
      month: month,
      day: day,
    });
  },
};
</script>
