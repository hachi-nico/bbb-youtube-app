<template>
  <div>
    <div v-for="(item, i) in data" :key="i">
      <v-hover v-slot="{ hover }" open-delay="50" style="transition: 0.2s">
        <v-card flat outlined class="mb-4" :elevation="hover ? 5 : 0">
          <v-card-title>
            {{ item.matkul }}
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>{{ item.dosen }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-calendar-range</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>{{ item.tanggal }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      data: [
        {
          matkul: "Pancasila dan Kewarganegaraan (USBJJ: SMAN 1 Ponorogo)",
          dosen: "Mulyadi JA S.S., M.Si.",
          tanggal: "Kamis, 17 Maret 2022 - 18:30:07",
        },
        {
          matkul: "Pancasila dan Kewarganegaraan (USBJJ: SMAN 1 Ponorogo)",
          dosen: "Mulyadi JA S.S., M.Si.",
          tanggal: "Kamis, 17 Maret 2022 - 18:30:07",
        },
        {
          matkul: "Pancasila dan Kewarganegaraan (USBJJ: SMAN 1 Ponorogo)",
          dosen: "Mulyadi JA S.S., M.Si.",
          tanggal: "Kamis, 17 Maret 2022 - 18:30:07",
        },
      ],
    };
  },
};
</script>
