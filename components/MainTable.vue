<template>
  <v-card style="margin-bottom: 70px">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Cari..."
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="antrianFile"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "MainTable",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nama File",
          align: "start",
          value: "namafile",
        },
        { text: "User", value: "user" },
        { text: "Status", value: "status" },
        { text: "Aksi", value: "aksi" },
      ],
      antrianFile: [
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Hero Yudo Martono ST, MT",
          status: "uploading",
          aksi: "Batalkan",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Hero Yudo Martono ST, MT",
          status: "uploading",
          aksi: "Batalkan",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Hero Yudo Martono ST, MT",
          status: "uploading",
          aksi: "Batalkan",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Hero Yudo Martono ST, MT",
          status: "uploading",
          aksi: "Batalkan",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Hero Yudo Martono ST, MT",
          status: "uploading",
          aksi: "Batalkan",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Hero Yudo Martono ST, MT",
          status: "uploading",
          aksi: "Batalkan",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Hero Yudo Martono ST, MT",
          status: "uploading",
          aksi: "Batalkan",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Hero Yudo Martono ST, MT",
          status: "uploading",
          aksi: "Batalkan",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Dr Idris Winarno S.ST, M.Kom	",
          status: "Selesai",
          aksi: "Hapus",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Dr Idris Winarno S.ST, M.Kom	",
          status: "Selesai",
          aksi: "Hapus",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Dr Idris Winarno S.ST, M.Kom	",
          status: "Selesai",
          aksi: "Hapus",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Dr Idris Winarno S.ST, M.Kom	",
          status: "Selesai",
          aksi: "Hapus",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Dr Idris Winarno S.ST, M.Kom	",
          status: "Selesai",
          aksi: "Hapus",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Dr Idris Winarno S.ST, M.Kom	",
          status: "Selesai",
          aksi: "Hapus",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Dr Idris Winarno S.ST, M.Kom	",
          status: "Selesai",
          aksi: "Hapus",
        },
        {
          namafile: "timestamp_ruang_matakuliah.mp4",
          user: "Dr Idris Winarno S.ST, M.Kom	",
          status: "Selesai",
          aksi: "Hapus",
        },
      ],
    };
  },
};
</script>
