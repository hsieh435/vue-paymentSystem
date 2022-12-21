<!-- 分頁功能 Components -->
<!-- https://axellarsson.com/blog/vue-3-pagination-composition-api/ -->
<template>
  <div class="pagination-container">
    <ul class="pagination">
      <li><a>FIRST PAGE</a></li>
      <li><a>1</a></li>
      <li><a>2</a></li>
      <li><a>3</a></li>
      <li><a>4</a></li>
      <li><a>5</a></li>
      <li><a>6</a></li>
      <li><a>7</a></li>
      <li><a>LAST PAGE</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { anyTypeAnnotation } from "@babel/types";
import { defineComponent, toRefs } from "vue";
export default defineComponent({
  name: "Pagination",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.pagination-container {
  display: inline-block;
  padding: 0px;
  margin: 20px 0px 20px 0px;
}

.pagination {
  background: white;
  margin: 0px;
  padding: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  border: none;
  box-sizing: border-box;
  overflow: hidden;
  word-wrap: break-word;
  align-content: center;
  border-radius: 14px;
}

ul.pagination li {
  display: inline;
  cursor: pointer;
  margin-bottom: 0px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

ul.pagination li a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  margin: 0 3px;
  &:hover {
    color: #333333;
    background-color: #e9e9e9;
    border: none;
  }
}

ul.pagination li a.active {
  background-color: #4caf50;
  color: white;
  border: 1px solid #4caf50;
}

ul.pagination li a:hover:not(.active) {
  background-color: #ddd;
}
</style>
