<!-- 具名插槽 -->
<template>
  <div class="child-box">
    <slot>
      <div class="section">
        <h2>
          <slot name="title"></slot>
        </h2>
        <p>
          <slot name="slogan"></slot>
        </p>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ChildInfo1",

  setup() {
    return {};
  },
});
</script>

<style>
.child-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 10px 25% 10px 25%;
  /* border: 1px solid black; */
}

.section {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-bottom: 50px;
  padding-left: 20px;
  margin: 10px 50px 10px 100px;
  border-left: 4px solid rgb(65, 105, 225);
  /* border: 4px solid rgb(65, 105, 225) */
}
</style>
