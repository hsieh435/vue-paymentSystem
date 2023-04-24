// 此頁面輸出來自資料
import { Ref, ref, inject } from "vue";
import axios from "axios";
import { roleUseClientSidePagination } from "./roleUseClientSidePagination";

export interface Role {
  id: number;
  userId: string;
  userName: string;
  roleName: string;
  roleId: string;
}
// Interface 可以用來定義物件介面，還有由物件所延伸的型別，例如：Object、Array、Function），常用於對「物件的形狀（Shape）」進行描述。

export function roleApi(currentPage: Ref<number>, rowsPerPage?: Ref<number>) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("userJWT");

  const roles: Ref<Role[]> = ref([]);

  const rolesAreLoading: any = inject("valueofLoading");

  const { paginatedArray, numberOfPages } = roleUseClientSidePagination<Role>({
    rowsPerPage,
    arrayToPaginate: roles,
    currentPage,
  });

  const loadRoles = async () => {
    if (userId != null) {
      rolesAreLoading.value = null;
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
        // console.log("rolesArray:", rolesArray);
        const rolewithid = [];
        for (let i = 0; i < rolesArray.length; i++) {
          const eachrole = rolesArray[i];
          eachrole["id"] = i + 1;
          rolewithid.push(eachrole);
          roles.value = rolewithid;
        }
      } catch (error) {
        alert("網路連線發生錯誤");
      } finally {
        rolesAreLoading.value = true;
      }
    }
  };

  return {
    roles: paginatedArray,
    loadRoles,
    rolesAreLoading,
    numberOfPages,
  };
}
