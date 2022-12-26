<template>
  <div class="pagination-container">
    <ul class="pagination">
      <li class="page-item">
        <span class="page-link">&laquo;</span>
      </li>
      <li class="page-item">
        <div class="page-link">1</div>
      </li>
      <li class="page-item">
        <div class="page-link">2</div>
      </li>
      <li class="page-item">
        <div class="page-link">3</div>
      </li>
      <li class="page-item">
        <div class="page-link">4</div>
      </li>
      <li class="page-item">
        <div class="page-link">5</div>
      </li>
      <li class="page-item" aria-label="go to next page">
        <div class="page-link">&raquo;</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { anyTypeAnnotation } from "@babel/types";
import { defineComponent, toRefs } from "vue";
export default defineComponent({
  name: "PaginationComponent",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.pagination-container {
  display: inline-block;
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

.page-item {
  display: flex;
  cursor: pointer;
  margin-bottom: 0px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.page-link {
  color: #666b85;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 800;
  &:hover {
    color: #333333;
    background-color: #e9e9e9;
    border: none;
  }
}

.active-page {
  background-color: #60d394 !important;
  color: white !important;
  &:hover {
    border: none;
  }
}

.disabled {
  .page-link {
    background-color: #f9fafb;
  }
  cursor: not-allowed;
}
</style>
