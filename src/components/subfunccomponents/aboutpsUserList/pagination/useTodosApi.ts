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

  const users: Ref<User[]> = ref([]);

  const UsersAreLoading = ref(false);

  const { paginatedArray, numberOfPages } = usePagination<User>({
    rowsPerPage,
    arrayToPaginate: users,
    currentPage,
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
      // users.value = result.data.data;
      // console.log("result:", result.data.data);

      const usersArray = result.data.data;
      // console.log("usersArray:", usersArray);

      const userwithid = [];

      for (let i = 0; i < usersArray.length; i++) {
        const eachuser = usersArray[i];
        // console.log("eachuser:",eachuser);

        eachuser["id"] = i + 1;
        // console.log("eachuser:", eachuser);

        userwithid.push(eachuser);
        // console.log("userwithid:", userwithid);
        users.value = userwithid;
        // console.log("users:", users);
      }
    } catch (error) {
      // console.log("error:", error);
    } finally {
      UsersAreLoading.value = false;
    }
  };

  return {
    users: paginatedArray,
    loadUsers,
    UsersAreLoading,
    numberOfPages,
  };
}
