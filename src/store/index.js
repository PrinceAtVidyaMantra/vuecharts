import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentData: [],
    users: ["Ahmad", "Rony", "Sonu"],
    fields: [
      { text: "Files", type: "number" },
      { text: "MCQ", type: "number" },
      { text: "Records", type: "number" },
    ],
  },
  mutations: {// synchronous way to update state

    setCurrentData : state => {

      const dataCols = state.fields.map((field) => {
        return field.text;
      });
      state.currentData[0] = ["Users", ...dataCols];
      axios
        .get(
          "https://reports-4888c-default-rtdb.firebaseio.com/records/2022/January/4.json"
        )
        .then((res) => {
          const currentRecord = res.data;
          for (let user in currentRecord) {

            const userData = [];
            userData.push(user);
            for (let i in currentRecord[user]) {
              parseInt(currentRecord[user][i])
              userData.push(parseInt(currentRecord[user][i]))
            }
            state.currentData.push(userData);

          }
        })
        .catch((er) => console.log(er));
    },

    updateTodaysRecords : (state, payload) => {
      axios
        .put(
          "https://reports-4888c-default-rtdb.firebaseio.com/records.json", payload
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

  },
  getters: {
    getCurrentData: state => state.currentData
  },
  actions: {
    setCurrentData(state) {
      state.commit("setCurrentData")
    },
    updateTodaysRecords: (state, payload) => state.commit("updateTodaysRecords", payload)
  },
  modules: {},
});
