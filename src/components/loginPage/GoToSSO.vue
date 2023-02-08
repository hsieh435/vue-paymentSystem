<template></template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "GoToSSO",
  components: {},

  setup() {
    location.href = `http://localhost:8081?systemId=paymentSystem&callBackPath=http://localhost:8080/GotSSOInfo`;

    return {};
  },
});
</script>
