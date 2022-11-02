<template>
<ul class="users_list">
    <transition-group name="slide-fade">
     <VUserCard
    v-for="(user, index) in users" :key="user.id"
    :user="user"/>
    </transition-group>
   
</ul>
</template>
<script setup lang="ts">
import { User } from '@/stores/models';
import VUserCard from '../components/VUserCard.vue';

defineProps<{
    users:User[]
}>()
</script>
<style scoped lang="scss">
@import "@/assets/fade.transition.scss";
</style>