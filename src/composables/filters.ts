import { User } from "@/stores/models/"

export const useFilters = ()=>{
   const filterByCountry = (filter:"usa"| "russia"| null,user:User)=>{
        if (!filter)return true
        return user.country === filter
    }
    const filterByScores = (filter:"< 20"| "> 20"| null,user:User)=>{
        if (!filter)return true
return filter === "< 20" ? user.score <= 20 : user.score > 20
 
    }
    return {filterByCountry,filterByScores}
}