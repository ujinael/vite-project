<template>
<li class="card">
    <span class="card__score">Rating&nbsp;{{user.score}}</span>
<div class="card__avatar"
 tabindex="0"
@focusout="hideAddress" 
 @focus="showAddress"
 ref="avatar"
 >
    <img class="card__img" :src="user.avatar" alt="avatar">
    <div class="dropdown__wrapper" @click="hideAddress" v-if="show">

    </div>
    <transition name="fade">
     <div class="address__dropdown"        
        v-show="show"
        >
        <h5>address</h5>
        <div class="country">{{user.country}}</div>
        <div class="address">{{user.address}}</div>
    </div>
    </transition>
      
    
</div>

<div class="card__content">
    <h4 class="card__title">{{user.message.title}}</h4>
    <div class="card__subtitle">
        <span class="user_name">{{`${user.name}/${user.country}`}}</span>&mdash;
        <span :title="user.message.body" class="user_message">{{user.message.body}}</span>
    </div>
</div>
</li>
</template>
<script setup lang="ts">

import { User } from '@/stores/models';
import { useToggle } from '@/composables';
import { ref } from 'vue';

defineProps<{
    user:User
}>()
const avatar = ref<HTMLElement|null>(null)
const showAddress = ()=>{
     toggle()

}
const hideAddress = ()=>{
  if(show.value)
   show.value = false
   avatar.value?.blur()
}

const {show,toggle} = useToggle()
</script>
<style scoped lang="scss">
@import "@/assets/fade.transition.scss";
.card{

display: grid;
margin-top: 1rem;
width: 100%;
height: 100px;
grid-template-columns: min-content 1fr;
align-items:flex-start;
gap: 1rem;
position: relative;
&__score{
    position: absolute;
    bottom: 4px;
    right: 0;
    color: gold;
    font-size: small;
}
&__content{
    height: 100px;
    width: 100%;
    border-bottom: 1px solid lightgray;
    padding-bottom: 1rem;
    font-weight: 300;
}
&__avatar{
height: 60px;
width: 60px;
border-radius: 50%; 
position: relative;
cursor: pointer;
}
&__img{
position: absolute;
width: 100%;
height: 100%;
border-radius: 50%; 

top: 50%;
left: 50%;
transform: translate(-50%,-50%);
}
&__title{
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
    font-weight: 400;

}
&__subtitle{
    height: 2.5em;
    overflow: hidden;
    text-overflow: ellipsis;
}

}
.dropdown__wrapper{
    position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
border-radius: 50%;
}
.address__dropdown{
    position: absolute;
    width: 200px;
    top: calc(100% + 10px);
    left: 0;
    background-color: white;
    box-shadow: 4px 4px 8px gray;
    z-index: 3;
    padding: .5rem;
    font-size: small;
}
.address{
    color: gray;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.user_message{
    color: gray;
}
</style>