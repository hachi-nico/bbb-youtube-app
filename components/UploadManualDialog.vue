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
    <v-card class="pt-2">
      <global-alert
        :title="
          error
            ? 'Internal Error - Silahkan coba lagi'
            : 'Berhasil Upload Manual'
        "
        :type="error ? 'error' : 'success'"
        v-show="error || success"
        class="mx-5"
      />
      <v-card-title>
        <span class="text-h5">Upload file video manual ke Youtube</span>
      </v-card-title>
      <v-card-text>
        <v-file-input
          show-size
          label="File video"
          prepend-icon="mdi-folder-play"
          v-model="chosenFile"
        ></v-file-input>
        <v-text-field v-model="namaFile" label="Nama File"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="px-5 py-5"
          color="error"
          @click="
            () => {
              dialog = false;
              resetAlertState();
            }
          "
          dark
        >
          Kembali
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          class="px-5 py-5"
          color="success"
          v-show="loading == false"
          @click="uploadHandler"
          :disabled="loading == true"
        >
          Upload
        </v-btn>
      </v-card-actions>
      <v-progress-linear
        indeterminate
        color="primary"
        v-show="loading"
      ></v-progress-linear>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import GlobalAlert from "@components/GlobalAlert";

export default {
  components: { GlobalAlert },
  data() {
    return {
      // app state
      dialog: false,
      loading: false,
      error: false,
      success: false,
      chosenFile: null,

      // params
      namaFile: "",
    };
  },
  methods: {
    resetAlertState() {
      this.error = false;
      this.success = false;
    },
    async uploadHandler() {
      try {
        const form_data = new FormData();
        form_data.append("file", this.chosenFile);
        form_data.append("namaFile", this.namaFile);

        this.loading = true;
        const res = await axios.post(
          "http://localhost:3001/v1/youtube/upload",
          form_data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.loading = false;
        this.success = true;
        // console.log(res);
      } catch (err) {
        console.log(this.error);
        this.loading = false;
        this.error = true;
        console.log(err.response.data);
      }
    },
  },
};
</script>
