// 此頁面設定並輸出以下參數

// numberOfPages：總頁數
// currentPage：現行頁數
// rowsPerPage：各頁呈現資料筆數
// arrayToPaginate：容納所有呈現在前端頁面資料的陣列

import { computed, Ref, ref } from "vue";

interface PaginationConfig<T> {
  rowsPerPage?: Ref<number>;
  arrayToPaginate: Ref<T[]>;
  currentPage: Ref<number>;
}
// <>，<> 中可輸入型別類型，<T> 用來指代任意輸入的型別，即泛型
// T[]，泛型陣列

export function roleUseClientSidePagination<T>(config: PaginationConfig<T>) {
  const rowsPerPage = config.rowsPerPage || ref(100);

  // console.log("config.arrayToPaginate:", config.arrayToPaginate);
  // console.log("config.currentPage:", config.currentPage.value);
  // console.log("config.rowsPerPage:", config.rowsPerPage);

  const paginatedArray = computed(() =>
    config.arrayToPaginate.value.slice(
      (config.currentPage.value - 1) * rowsPerPage.value,
      config.currentPage.value * rowsPerPage.value
    )
  );
  // console.log("paginatedArray:",paginatedArray)
  // paginatedArray：獲取頁面的資料

  const numberOfPages = computed(() =>
    Math.ceil((config.arrayToPaginate.value.length || 0) / rowsPerPage.value)
  );
  // Math.ceil() 函式會回傳大於等於所給數字的最小整數。
  // numberOfPages：總頁數

  return {
    paginatedArray,
    numberOfPages,
  };
}
