import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentData: {

    },
    chartData : [
      
    ],
   
    users: ["Ahmad", "Rony", "Sonu"],
    fields: [
      { text: "Files", type: "number" },
      { text: "MCQ", type: "number" },
      { text: "Records", type: "number" },
    ],
  },
  mutations: {},
  actions: {
    fetchCurrentData(){
      
    }
  },
  modules: {},
});
