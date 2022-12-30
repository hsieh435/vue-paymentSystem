// 此頁面輸出來自資料
import { Ref, ref } from "vue";
import axios from "axios";
import { useClientSidePagination } from "./useClientSidePagination";

export interface User {
  userId: string;
  userName: string;
  roleName: string;
}
// Interface 可以用來定義物件介面，還有由物件所延伸的型別，例如：Object、Array、Function），常用於對「物件的形狀（Shape）」進行描述。

export function useTodosApi(
  currentPage: Ref<number>,
  rowsPerPage?: Ref<number>
) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("userJWT");

  const users: Ref<User[]> = ref([]);
  // console.log("User:",User);
  // console.log("users:",users);

  const UsersAreLoading = ref(false);

  const { paginatedArray, numberOfPages } = useClientSidePagination<User>({
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
      alert("資料傳輸發生錯誤");
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
