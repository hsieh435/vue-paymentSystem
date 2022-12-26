import { computed, Ref, ref } from "vue";

interface PaginationConfig<T> {
  rowsPerPage?: Ref<number>;
  arrayToPaginate: Ref<T[]>;
  currentPage: Ref<number>;
}

export function usePagination<T>(config: PaginationConfig<T>) {
  const rowsPerPage = config.rowsPerPage || ref(100);

  const paginatedArray = computed(() =>
    config.arrayToPaginate.value.slice(
      (config.currentPage.value - 1) * rowsPerPage.value,
      config.currentPage.value * rowsPerPage.value
    )
  );
  // console.log("paginatedArray:,"paginatedArray)
  // paginatedArray：獲取各個頁面的資料

  const numberOfPages = computed(() =>
    Math.ceil((config.arrayToPaginate.value.length || 0) / rowsPerPage.value)
  );
  // numberOfPages：總頁數

  return {
    paginatedArray,
    numberOfPages,
  };
}

// import { computed, Ref, ref } from "vue";

// interface PaginationConfig<T> {
//   rowsPerPage?: Ref<number>;
//   arrayToPaginate: Ref<T[]>;
//   currentPage: Ref<number>;
// }

// export function usePagination<T>(config: PaginationConfig<T>) {
//   const rowsPerPage = config.rowsPerPage || ref(100);

//   const paginatedArray = computed(() =>
//     config.arrayToPaginate.value.slice(
//       (config.currentPage.value - 1) * rowsPerPage.value,
//       config.currentPage.value * rowsPerPage.value
//     )
//   );

//   const numberOfPages = computed(() =>
//     Math.ceil((config.arrayToPaginate.value.length || 0) / rowsPerPage.value)
//   );

//   return {
//     paginatedArray,
//     numberOfPages
//   };
// }
