// 此頁面輸出來自資料
import { Ref, ref, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { useClientSidePagination } from "./useClientSidePagination";

export interface User {
  id: number;
  userInfo: {
    notesId: string;
    userName: string;
  };
  role: {
    roleName: string;
    roleId: string;
  };
}
// Interface 可以用來定義物件介面，還有由物件所延伸的型別，例如：Object、Array、Function），常用於對「物件的形狀（Shape）」進行描述。

export function useTodosApi(
  currentPage: Ref<number>,
  rowsPerPage: Ref<number>
) {
  const userId = localStorage.getItem("userId");
  const userJWT = localStorage.getItem("userJWT");
  const router = useRouter();

  // const reload: any = inject("reload");
  const keyword: any = inject("keyword");
  // console.log("keyword from API:", keyword);

  const users: Ref<User[]> = ref([]);

  const UsersAreLoading: any = inject("valueofLoading");

  const { paginatedArray, numberOfPages } = useClientSidePagination<User>({
    rowsPerPage,
    arrayToPaginate: users,
    currentPage,
  });

  const loadUsers = async () => {
    if (userId == null || userJWT == null) {
      router.push("./");
    } else {
      UsersAreLoading.value = null;
      try {
        const result = await axios.post(
          "http://localhost:8085/paymentSystem/api/PSUser/findAllPSUser",
          { notesId: userId },
          {
            headers: {
              Authorization: "Bearer " + userJWT,
              // Bearer 跟 userJWT 中間要有一個空格
            },
          }
        );

        const usersArray = result.data.data;
        // console.log("usersArray:", usersArray);
        const userwithid: any = [];

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
        // console.table(userwithid);
      } catch (error) {
        alert("資料傳輸發生錯誤");
      } finally {
        UsersAreLoading.value = true;
      }
    }
  };

  return {
    users: paginatedArray,
    loadUsers,
    UsersAreLoading,
    numberOfPages,
  };
}
