<!-- 分頁 Component -->
<!-- https://axellarsson.com/blog/vue-3-pagination-composition-api/ -->
<template>
  <div class="pagination-container" aria-label="row pagination">
    <ul v-if="numberOfPages >= 1" class="pagination">
      <!-- 第一頁 -->
      <li class="page-item" aria-label="go to previous page" @click="first()" :class="{
          disabled: currentPage === 1,
        }">
        <span class="page-link">FIRST PAGE</span>
      </li>
      <!-- 往前跳兩頁 -->
      <li class="page-item" aria-label="go to previous page" @click="minusfour()" :class="{
          disabled: currentPage < 3,
        }">
        <span class="page-link">&#10218;</span>
      </li>
      <!-- 當下頁面 -->
      <li v-for="index in numberOfPages" :key="index" :aria-label="'go to page ' + index" class="page-item"
        @click="setCurrentPage(index)">
        <div class="page-link" :class="{
            'active-page': currentPage === index,
          }" v-if="0 < index && index < numberOfPages + 1">
          {{ index }}
        </div>
      </li>
      <!-- 往後跳兩頁 -->
      <li class="page-item" aria-label="go to previous page" @click="plusfour()" :class="{
          disabled: currentPage > numberOfPages - 2,
        }">
        <span class="page-link">&#10219;</span>
      </li>
      <!-- 最後一頁 -->
      <li class="page-item" :class="{
          disabled: currentPage === numberOfPages || !numberOfPages,
        }" aria-label="go to next page" @click="last()">
        <div class="page-link">LAST PAGE</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  numberOfPages: {
    required: true,
    type: Number,
  },
  modelValue: {
    required: true,
    type: Number,
  },
});

const { numberOfPages, modelValue: currentPage } = toRefs(props);
// console.log("numberOfPages:", numberOfPages);
// console.log("modelValue:", props.modelValue);

const emit = defineEmits(["update:modelValue"]);
// console.log("emit:", emit);
// 結果未知

const setCurrentPage = (number: Number) => {
  emit("update:modelValue", number);
};

const first = () => {
  if (currentPage.value !== 1)
    emit("update:modelValue", (currentPage.value = 1));
};

const minusfour = () => {
  if (currentPage.value < 3) return;
  emit("update:modelValue", currentPage.value - 2);
};

const plusfour = () => {
  if (currentPage.value > numberOfPages.value - 3) return;
  emit("update:modelValue", currentPage.value + 2);
};

const last = () => {
  if (currentPage.value !== numberOfPages.value)
    emit("update:modelValue", (currentPage.value = numberOfPages.value));
};
</script>

<style lang="scss" scoped>
.pagination-container {
  display: inline-block;
  margin: 30px auto 30px auto;
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
  -webkit-touch-callout: none; // iOS Safari
  -webkit-user-select: none; // Safari
  -khtml-user-select: none; // Konqueror HTML
  -moz-user-select: none; // Old versions of Firefox
  -ms-user-select: none; // Internet Explorer/Edge
  user-select: none; // Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
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
  background-color: #60d394;
  color: white;

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
