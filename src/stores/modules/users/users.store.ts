import { useFilters } from "@/composables";
import { defineStore,acceptHMRUpdate } from "pinia";
import { User } from "./entities/user.entity";
import usersJson from "./users.api.json";
interface UsersState {
  countryFilter: "usa" | "russia" | null;
  countryFilterValues: Array<"usa" | "russia" | null>;
  scoreFilter: "< 20" | "> 20" | null;
  scoreFilterValues: Array<"< 20" | "> 20" | null>;
  users: User[];
}
export const useUsersStore = defineStore("users", {
  state(): UsersState {
    return {
      countryFilter: null,
      countryFilterValues: ["usa", "russia", null],
      scoreFilter: null,
      scoreFilterValues: ["< 20", "> 20", null],
      users: [],
    };
  },
  getters: {
    filteredUsers: (state) =>{
        const {filterByCountry,filterByScores} = useFilters()
  return state.users.filter(user=>filterByCountry(state.countryFilter,user)
  &&filterByScores(state.scoreFilter,user))
    }
  },
  actions: {
  
    getAllUsers() {        
      this.users = usersJson as User[]
    },
  },
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
  }