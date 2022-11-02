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
@import "@/assets/form.scss";

</style>