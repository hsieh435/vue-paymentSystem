import { ref, Ref, reactive } from "vue";
import axios from "axios";

import { usePagination } from "./useClientSidePagination";

const URL = "https://jsonplaceholder.typicode.com/todos/";
// const URL = "./data.ts";
// const URL = "http://localhost:8085/paymentSystem/api/PSUser/findAllPSUser"

const userId = localStorage.getItem("userId");
const token = localStorage.getItem("userJWT");

const userlist = reactive({ value: null });

axios
  .post(
    "http://localhost:8085/paymentSystem/api/PSUser/findAllPSUser",
    { notesId: userId },
    {
      headers: {
        Authorization: "Bearer " + token,
        // Bearer 跟 token 中間要有一個空格
      },
    }
  )

  .then((response) => {
    userlist.value = response.data.data;
    // console.log("傳遞成功");
    // console.log(response.data.data);
  })
  .catch((error) => {
    alert("發生錯誤");
    // console.log("傳遞失敗");
  });

export interface Todo {
  id: number;
  title: string;
}

export function useTodosApi(
  currentPage: Ref<number>,
  rowsPerPage?: Ref<number>
) {
  const todos: Ref<Todo[]> = ref([]);

  const todosAreLoading = ref(false);

  const { paginatedArray, numberOfPages } = usePagination<Todo>({
    rowsPerPage,
    arrayToPaginate: todos,
    currentPage,
  });

  const loadTodos = async () => {
    todosAreLoading.value = true;
    try {
      const result = await axios.get(URL);
      todos.value = result.data;
    } catch (err) {
      console.log(err);
    } finally {
      todosAreLoading.value = false;
    }
  };

  return {
    todos: paginatedArray,
    loadTodos,
    todosAreLoading,
    numberOfPages,
  };
}
