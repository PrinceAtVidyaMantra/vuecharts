import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    databaseURL: "https://reports-4888c-default-rtdb.firebaseio.com/records/",
    currentData: undefined,
    chartData: [],
    years: ["2021", "2022"],
    days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", '17', "18", "19"],
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
    selectedDate: { day: "1", month: 0, year: "2021" },

    users: ["Ahmad", "Rony", "Sonu"],
    fields: [
      { text: "Files", type: "number" },
      { text: "MCQ", type: "number" },
      { text: "Records", type: "number" },
    ],
  },
  mutations: {
    setCurrentData(state, currentData) {
      state.currentData = currentData;
    },

    setChartData(state, chartData) {
      state.chartData = chartData;
    },
  },
  getters: {
    chartData(state) {
      return state.chartData;
    },
    years(state) {
      return state.years;
    },

    months(state) {
      return state.months;
    },

    days(state) {
      return state.days;
    },
    fields(state) {
      return state.fields;
    },
    users(state) {
      return state.users;
    },
  },
  actions: {
    updateRecords({ state }, { timespan, records }) {
      // Generate Axios Request URL
      let requestURL = state.databaseURL + timespan.year;
      console.log(timespan);
      if (timespan.month !== undefined) {
        requestURL += `/${state.months[timespan.month]}`;
        if (timespan.day !== undefined) {
          requestURL += `/${timespan.day}`;
        }
      }
      requestURL += ".json";
      console.log(requestURL);
      axios
        .put(requestURL, records)
        .then((res) => {
          console.log(res);
          alert('Data Pushed')
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCurrentData({ commit, state }, timespan) {
      const dataCols = state.fields.map((field) => {
        return field.text;
      });

      const chartData = [];
      chartData.push(["Users", ...dataCols]);

      // Generate Axios Request URL
      let requestURL = state.databaseURL + timespan.year;
      if (timespan.month !== undefined) {
        requestURL += `/${state.months[timespan.month]}`;
        if (timespan.day !== undefined) {
          requestURL += `/${timespan.day}`;
        }
      }
      requestURL += ".json";
      console.log(requestURL);

      // Make Request
      axios
        .get(requestURL)
        .then((res) => {
          console.log(res.data);
          if (res.data == null) {
            commit("setChartData", undefined);
          } else {
            commit("setCurrentData", res.data);

            console.log(state.currentData);

            for (let user in state.currentData) {
              const userData = [];
              userData.push(user);

              for (let i in state.currentData[user]) {
                parseInt(state.currentData[user][i]);
                userData.push(parseInt(state.currentData[user][i]));
              }
              chartData.push(userData);
            }
            commit("setChartData", chartData);
          }
        })
        .catch((er) => console.log(er));
    },
  },
  modules: {},
});
