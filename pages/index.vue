<template>
  <div>
    <upload-manual-dialog />
    <main-table />
  </div>
</template>

<script>
import MainTable from "@components/MainTable.vue";
import UploadManualDialog from "@components/UploadManualDialog.vue";

export default {
  components: { MainTable, UploadManualDialog },
  name: "IndexPage",
};
</script>
