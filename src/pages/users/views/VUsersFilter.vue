<template>
<form class="form">
    <h3 class="form__title">Filters</h3>
    <div class="form__item">
  <label class="form__label" for="country">country</label>
    <select class="form__select" name="" id="country" v-model="countryFilter">
        <option
        v-for="(opt, index) in countryFilterValues" 
        :key="index"
        :value="opt"
        >
    {{opt ?? "none"}}
    </option>
    </select>
    </div>
    <div class="form__item">
            <label class="form__label" for="country">score</label>

    <select class="form__select" name="" id="score" v-model="scoreFilter">
        <option
        v-for="(opt, index) in scoreFilterValues" 
        :key="index"
        :value="opt"
        >
    {{opt ?? "none"}}
    </option>

    </select>
    </div>
  

</form>
</template>
<script setup lang="ts">
import { useUsersStore } from '@/stores/modules';
import { storeToRefs } from 'pinia';
const store = useUsersStore()
const {countryFilter,countryFilterValues,scoreFilter,scoreFilterValues} = storeToRefs(store)

</script>
<style scoped lang="scss">
.form{
    display: flex;
    background-color: rgb(23, 154, 111);
    padding: .5rem;
    gap: 1rem;
    align-items: center;
    box-shadow: 0 2px 3px gray;
&__title{
    color: white;
}
&__item{
display: grid;    
}
&__label{
    color: white;
    font-size: small;
    margin-bottom: .2em;
}
&__select{
padding: .35em; 
background-color: transparent;  
border: 1px solid white; 
color: white;
border-radius: 3px;
}
&__select:focus{
    outline: none;
}
}

</style>