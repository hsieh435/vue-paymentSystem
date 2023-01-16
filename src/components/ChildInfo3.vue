<!-- 作用域插槽 -->
<template>
  <div class="productcard">
    <p class="producttitle">
      <slot name="title"></slot>
    </p>
    <p>
      售價：
      <slot name="price"></slot>
    </p>
    <p>
      <slot name="size"></slot>
    </p>
    <div class="quantity">
      <label for="quantity">數量：</label>
      <select name="quantity" id="quantity" v-model="quantity">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <p class="result">
      <slot name="result" :quantity="quantity"></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ChildInfo3",

  setup() {
    const quantity = ref("0");
    return {
      quantity,
    };
  },
});
</script>

<style scoped>
.productcard {
  width: 60%;
  text-align: center;
  padding: 10px;
  margin: 20px 20% 20px 20%;
  border: 1px solid grey;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 16px;
}

.producttitle {
  font-size: 24px;
  color: black;
}

.quantity {
  margin-bottom: 20px;
}

.result {
  padding: 5px;
  background: #ededed;
}
</style>
