import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    today: {
      ahmad: {
        mcq: 36,
        files: 2,
        records: 10,
      },

      rony: {
        mcq: 36,
        files: 2,
        records: 10,
      },

      sonu: {
        mcq: 36,
        files: 2,
        records: 10,
      },
    },

    // data = {},

    data: {
      '2021': {
        January: {
          1: {
            ahmad: {
              mcq: 36,
              files: 2,
              records: 10,
            },

            rony: {
              mcq: 36,
              files: 2,
              records: 10,
            },

            sonu: {
              mcq: 36,
              files: 2,
              records: 10,
            },
          },
          2: {
            ahmad: {
              mcq: 36,
              files: 2,
              records: 10,
            },

            rony: {
              mcq: 36,
              files: 2,
              records: 10,
            },

            sonu: {
              mcq: 36,
              files: 2,
              records: 10,
            },
          },
        },
        February: {
          1: {
            ahmad: {
              mcq: 36,
              files: 2,
              records: 10,
            },

            rony: {
              mcq: 36,
              files: 2,
              records: 10,
            },

            sonu: {
              mcq: 36,
              files: 2,
              records: 10,
            },
          },
          2: {
            ahmad: {
              mcq: 36,
              files: 2,
              records: 10,
            },

            rony: {
              mcq: 36,
              files: 2,
              records: 10,
            },

            sonu: {
              mcq: 36,
              files: 2,
              records: 10,
            },
          },
        },
      },  
    },
    users: ["Ahmad", "Rony", "Sonu"],
    fields: [
      { text: "Files", type: "number" },
      { text: "MCQ", type: "number" },
      { text: "Records", type: "number" },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
