// 此頁面輸出來自資料
import { Ref, ref, inject } from "vue";
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
  rowsPerPage: Ref<number>
) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("userJWT");

  const keyword: any = localStorage.getItem("keyword");

  const reload: any = inject("reload");

  const users: Ref<User[]> = ref([]);

  const UsersAreLoading: any = inject("valueofLoading");

  const { paginatedArray, numberOfPages } = useClientSidePagination<User>({
    rowsPerPage,
    arrayToPaginate: users,
    currentPage,
  });

  const loadUsers = async () => {
    UsersAreLoading.value = null;
    if (keyword == null) {
      // 無 keyword 時之處理方式
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
        UsersAreLoading.value = true;
      }
    } else {
      // 有 keyword 時之處理方式
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
          const checkNoteId: boolean = usersArray[i].userInfo.notesId
            .toLowerCase()
            .includes(keyword);
          const checkUserName: boolean = usersArray[i].userInfo.userName
            .toLowerCase()
            .includes(keyword);
          const checkRoleName: boolean = usersArray[i].role.roleName
            .toLowerCase()
            .includes(keyword);

          usersArray[i]["id"] = i + 1;
          usersArray[i]["checkNoteId"] = checkNoteId;
          usersArray[i]["checkUserName"] = checkUserName;
          usersArray[i]["checkRoleName"] = checkRoleName;
          // console.log("usersArray:", usersArray);
        }

        const compareResult = usersArray.filter(function (value: any) {
          return (
            value.checkNoteId == true ||
            value.checkUserName == true ||
            value.checkRoleName == true
          );
        });

        users.value = compareResult;
        if (users.value.length == 0) {
          alert("查無符合結果");
          reload();
        }
        localStorage.removeItem("keyword");
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
