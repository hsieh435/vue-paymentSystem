<template>
  <input v-model="num" oninput="value=value.replace(/[^0-9.-]/g,'')" />
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from "vue";
export default defineComponent({
  name: "numInput",
  emits: ["updateNum"],
  props: {
    value: {
      type: [Number],
      default: ''
    }
  },
  setup(props, { emit }) {
    let num = ref();

    let custNum = computed({
      get() {
        if (num.value == 0) {
          console.log("mum1:", num.value);
          // emit("updateNum", "");
          return "";
        } else {
          console.log("mum2:", num.value);
          // emit("updateNum", num.value.toString());
          return num.value.toString();
        }
      },
      set(val: string) {
        console.log("mum3:", num.value);
        if (!isNaN(Number(val))) {
          console.log("mum4:", num.value);
          num.value = Number(val);
          if (num.value == 0) {
            console.log("mum5:", num.value);
            num.value = 1;
            nextTick();
            num.value = 0;
          }
        } else {
          if (val != "-") {
            console.log("mum6:", num.value);
            num.value = 1;
            nextTick();
            num.value = 0;
          }
        }
      }
    });

    return {
      num,
      custNum
    };
  }
});

</script>

<style lang="scss" scoped>
input {
  margin: 30px 0px 30px 0px;
}
</style>
