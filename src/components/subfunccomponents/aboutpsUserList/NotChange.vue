<template>
  <div class="wholeareaback">
    <div class="alert warning-alert">
      <h3>選擇角色相同，無修改</h3>
      <button class="close" @click="closeIT()">&times;</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "NotChange",
  components: {},

  setup() {
    const notchange: any = inject("notchange");

    function closeIT() {
      notchange.value = true;
    }

    return {
      closeIT,
    };
  },
});

// NotChange
</script>
<style src="../../public/alert.scss" lang="scss" scoped></style>
