<template>
  <div>
    <v-row class="mt-10">
      <v-col cols="3" justify="center" align="center">
        <p class="text-h4 mt-6">Select a Timespan:</p>
      </v-col>
      <v-col cols="2">
        <v-select :items="years" v-model="year" class="ma-4 mt-6" solo>
        </v-select>
      </v-col>
      <v-col cols="2">
        <v-select :items="months" v-model="month" class="ma-4 mt-6" solo>
        </v-select>
      </v-col>
      <v-col cols="2">
        <v-select :items="days" v-model="day" class="ma-4 mt-6" solo>
        </v-select>
      </v-col>
      <v-col>
        <v-btn @click="fetchRecords" class="ma-4 mt-7 primary">Fetch</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      day: "2",
      month: "January",
      year: "2022",
    };
  },
  methods: {
    fetchRecords() {
      let monthIdx = -1;
      for (let i = 0; i < this.months.length; ++i) {
        if (this.months[i] === this.month) {
          monthIdx = i;
        }
      }

      const payload = { day: this.day, month: monthIdx, year: this.year };
      this.$store.dispatch("fetchCurrentData", payload);
    },
  },
  computed: {
    ...mapGetters(["years", "chartData", "months", "days"]),
  },
  created() {
    this.fetchRecords();
  }
};
</script>

<style lang="scss" scoped>
</style>