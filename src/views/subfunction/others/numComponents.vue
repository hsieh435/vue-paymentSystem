
<!-- num Components的畫面 -->
<template>
  <numInput v-model="number"></numInput>
  <pre>{{ number }}</pre>
</template>
<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import numInput from "../../../components/subfunccomponents/other/numInput.vue";

let number = ref()

</script>

<style lang="scss" scoped>
</style>

<!--
  var num = ref(4);
var custNum = computed({
get() {
if (num.value == 0) {
return "";
} else {
return num.value.toString();
}
},
set(val: string) {
if (!isNaN(Number(val))) {
num.value = Number(val);
if (num.value == 0) {
num.value = 1
nextTick();
num.value = 0;
}
} else {
if (val != "-") {
num.value = 1
nextTick();
num.value = 0;
}
}
}
})
-->
