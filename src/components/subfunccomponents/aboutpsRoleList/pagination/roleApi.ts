// 此頁面輸出來自資料
import { Ref, ref } from "vue";
import axios from "axios";
import { roleUseClientSidePagination } from "./roleUseClientSidePagination";

export interface Role {
  userId: string;
  userName: string;
  roleName: string;
}
// Interface 可以用來定義物件介面，還有由物件所延伸的型別，例如：Object、Array、Function），常用於對「物件的形狀（Shape）」進行描述。

export function roleApi(currentPage: Ref<number>, rowsPerPage?: Ref<number>) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("userJWT");

  const roles: Ref<Role[]> = ref([]);
  // console.log("User:",User);
  // console.log("roles:",roles);

  const rolesAreLoading = ref(false);

  const { paginatedArray, numberOfPages } = roleUseClientSidePagination<Role>({
    rowsPerPage,
    arrayToPaginate: roles,
    currentPage,
  });

  const loadRoles = async () => {
    rolesAreLoading.value = true;
    try {
      const result = await axios.post(
        "http://localhost:8085/paymentSystem/api/psRole/findAllPSRole",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間要有一個空格
          },
        }
      );
      const rolesArray = result.data.data;
      console.log("rolesArray:", rolesArray);

      const rolewithid = [];

      for (let i = 0; i < rolesArray.length; i++) {
        const eachrole = rolesArray[i];
        // console.log("eachrole:",eachrole);

        eachrole["id"] = i + 1;
        // console.log("eachrole:", eachrole);

        rolewithid.push(eachrole);
        // console.log("userwithid:", userwithid);
        roles.value = rolewithid;
        // console.log("roles:", roles);
      }
    } catch (error) {
      alert("資料傳輸發生錯誤");
    } finally {
      rolesAreLoading.value = false;
    }
  };

  return {
    roles: paginatedArray,
    loadRoles,
    rolesAreLoading,
    numberOfPages,
  };
}
