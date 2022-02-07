<template>
  <div>
    <v-container fluid>
      <v-row align="center" justify="center" class="mx-auto">
        <v-col cols="9">
          <v-row>
            <v-col><p class="text-h5 text-center">Users</p></v-col>
            <v-col v-for="field in this.fields" :key="field.value"
              ><p class="text-h5 text-center">{{ field.text }}</p></v-col
            >
          </v-row>
          <v-row
            align="center"
            justify="center"
            v-for="user in this.users"
            :key="user"
          >
            <v-col
              ><p class="text-h6 text-center">{{ user }}</p></v-col
            >
            <v-col v-for="field in fields" :key="field.text"
              ><v-text-field
                :type="field.type"
                v-model="today_data[user][field.text]"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col justify="center" align="center"
              ><v-btn @click="submitRecord">Submit</v-btn></v-col
            >
          </v-row>
        </v-col>

        <v-col offset="1" cols="2" class="">
          <v-date-picker
            v-model="date"
            :max="maxDate"
            class="mt-4"
          ></v-date-picker>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8" class="mx-auto">
          <v-row align="center" justify="center" class="text-center" fluid>
            <v-col align="center" cols="10" class="pt-10">
              <v-file-input
                truncate-length="15"
                counter
                chips
                hint="Put your CSV files in here"
                accept=".csv"
                outlined
                v-model="file"
              ></v-file-input>
            </v-col>
            <v-col cols="2">
              <v-btn @click="importTxt" class=""> Import </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const today = new Date();

const todaysDate = `${today.getFullYear()}-${
  today.getMonth() + 1
}-${today.getDate()}`;

export default {
  data() {
    return {
      today_data: {},
      date: todaysDate,
      maxDate: todaysDate,
      file: undefined,
      data: "",
    };
  },
  methods: {
    csvToRecord(csvText) {
      csvText = csvText.trim();
      let data = {};

      let lines = csvText.split("\n");
      let firstLine = lines.splice(0, 1)[0];

      let headers = firstLine.split(",");
      headers.splice(0, 1);

      lines.forEach((line) => {
        let fields = line.split(",");
        let key = fields.splice(0, 1);

        data[key] = {};
        for (let i = 0; i < fields.length; ++i) {
          data[key][headers[i]] = fields[i];
        }
      });
      return data;
    },
    importTxt() {
      if (!this.files) {
        this.data = "No File Chosen";
      }

      var reader = new FileReader();
      reader.readAsText(this.file);
      reader.onload = () => {
        this.data = reader.result;
        console.log(this.csvToRecord(this.data));
        this.today_data = this.csvToRecord(this.data);
        this.submitRecord();
      };
    },
    printData() {
      console.log(this.today_data);
      console.log(this.date);
    },
    submitRecord() {
      const dateToAdd = new Date(this.date);
      const year = dateToAdd.getFullYear();
      const month = dateToAdd.getMonth();
      const day = dateToAdd.getDate();

      console.log(this.today_data);

      this.$store
        .dispatch("updateRecords", {
          timespan: { day: day, month: month, year: year },
          records: this.today_data,
        })
    },
  },
  computed: {
    ...mapGetters(["fields", "users"]),
  },
  created() {
    const x = this;
    this.users.forEach((user) => {
      x.today_data[user] = {};
      x.fields.forEach((field) => {
        x.today_data[user][field.value] = undefined;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
</style>