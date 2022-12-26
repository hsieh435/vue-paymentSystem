import { ref, Ref, reactive } from "vue";
import axios from "axios";
import { usePagination } from "./useClientSidePagination";

export interface User {
  userId: string;
  userName: string;
  roleName: string;
}

export function useTodosApi(
  currentPage: Ref<number>,
  rowsPerPage?: Ref<number>
) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("userJWT");

  const userlist = reactive({ value: null });

  const newUserArray: any = [];
  console.log("newUserArray:", newUserArray);

  const users: Ref<User[]> = ref([]);

  const UsersAreLoading = ref(false);

  const { paginatedArray, numberOfPages } = usePagination<User>({
    rowsPerPage,
    arrayToPaginate: users,
    currentPage,
  });

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

      const userlistArray: any = userlist.value;
      for (let i = 0; i < userlistArray.length; i++) {
        const userId: any = userlistArray[i].userInfo.notesId;
        const userName: any = userlistArray[i].userInfo.userName;
        const roleId: any = userlistArray[i].role.roleId;
        const roleName: any = userlistArray[i].role.roleName;
        const emptyObject: any = {};

        emptyObject["userId"] = userId;
        emptyObject["userName"] = userName;
        emptyObject["roleId"] = roleId;
        emptyObject["roleName"] = roleName;

        newUserArray.push(emptyObject);
      }
    })
    .catch((error) => {
      console.log("傳遞失敗");
    });

  const loadUsers = async () => {
    UsersAreLoading.value = true;
    try {
      const result = await axios.post(
        "http://localhost:8085/paymentSystem/api/PSUser/findAllPSUser",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間要有一個空格
          },
        }
      );
      users.value = result.data.data;
      console.log("result:", result.data.data);
    } catch (error) {
      console.log("error:", error);
    } finally {
      UsersAreLoading.value = false;
    }
  };

  return {
    userlist,
    users: paginatedArray,
    loadUsers,
    UsersAreLoading,
    numberOfPages,
  };
}

// export function useTodosApi(
//   currentPage: Ref<number>,
//   rowsPerPage?: Ref<number>
// ) {}

// import { ref, Ref } from "@vue/reactivity";
// import axios from "axios";

// import { usePagination } from "../components/pagination/useClientSidePagination";

// const URL = "https://jsonplaceholder.typicode.com/todos/";

// export interface Todo {
//   id: number;
//   title: string;
// }

// export function useTodosApi(
//   currentPage: Ref<number>,
//   rowsPerPage?: Ref<number>
// ) {
//   const todos: Ref<Todo[]> = ref([]);

//   const todosAreLoading = ref(false);

//   const { paginatedArray, numberOfPages } = usePagination<Todo>({
//     rowsPerPage,
//     arrayToPaginate: todos,
//     currentPage
//   });

//   const loadTodos = async () => {
//     todosAreLoading.value = true;
//     try {
//       const result = await axios.get(URL);
//       todos.value = result.data;
//     } catch (err) {
//       console.log(err);
//     } finally {
//       todosAreLoading.value = false;
//     }
//   };

//   return {
//     todos: paginatedArray,
//     loadTodos,
//     todosAreLoading,
//     numberOfPages
//   };
// }
