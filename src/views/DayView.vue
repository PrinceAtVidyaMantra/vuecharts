<template>
  <div id="app">
    <SelectionPane />
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import axios from "axios";
import SelectionPane from '../components/SelectionPane.vue';
export default {
  name: "App",
  components: {
    GChart,
    SelectionPane,
  },
  data() {
    return {
      
      chartData: [
        ["Users", "Sales", "Expenses", "Profit"],
        
      ],
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
  },
  created() {
      const dataCols = this.fields.map((field) => {
      return field.text;
    });
    this.chartData[0] = ["Users", ...dataCols];


    axios
      .get(
        "https://reports-4888c-default-rtdb.firebaseio.com/records/2021/January/2.json"
      )
      .then((res) => {
        this.todaysRecord = res.data;
        
        for (let user in this.todaysRecord) {
         
          const userData = [];
         
          userData.push(user);
          for (let i in this.todaysRecord[user]) {
             parseInt(this.todaysRecord[user][i])
           userData.push(parseInt(this.todaysRecord[user][i]))
             
          }
          this.chartData.push(userData);
          
        }
      })
      .catch((er) => console.log(er));
    
  },
};
</script>
