<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on"> Open Dialog </v-btn> -->
      <v-btn
        color="orange"
        style="z-index: 10; padding: 25px"
        v-bind="attrs"
        v-on="on"
        dark
        bottom
        right
        fixed
      >
        Upload Manual
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Upload file video manual ke Youtube</span>
      </v-card-title>
      <v-card-text>
        <v-file-input
          show-size
          label="File video"
          prepend-icon="mdi-folder-play"
        ></v-file-input>
        <v-text-field label="Nama File" required></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Tutup
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Simpan</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { httpClient } from "@config/httpClient.js";
import axios from "axios";

export default {
  name: "UploadManualDialog",
  data() {
    return {
      dialog: false,
      params: {
        name: "nico",
      },
    };
  },
  async mounted() {
    try {
      const res = await axios.post(
        "http://localhost:3001/v1/youtube/upload",
        this.params,
        { "Content-Type": "application/json" }
      );
      console.log(res, "ini res");
    } catch (err) {
      console.log(err, "ini err");
    }
  },
};
</script>
