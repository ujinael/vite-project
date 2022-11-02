<template>
<div class="users_page">
<VUsersFilter/>
<VUsersList :users="store.filteredUsers"/>
</div>
</template>
<script setup lang="ts">
import { useUsersStore } from '@/stores/modules/users/users.store';
import { onMounted } from 'vue';
import VUsersFilter from './views/VUsersFilter.vue';
import VUsersList from './views/VUsersList.vue';


const store = useUsersStore()
onMounted(()=>{
    store.getAllUsers()
})
</script>
<style scoped lang="scss">
.users_page{
display: grid;    
align-content: flex-start;
gap: 1rem;
}
</style>