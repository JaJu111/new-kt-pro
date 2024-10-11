<template>
    <div>
        <div class="navbar-box">
            <div class="navbar-header">
                <router-link to="/home">
                    <img src="../assets/KT_Logo.png">
                </router-link>

                <span>Pro</span>
            </div>

            <i v-if="!openNavbar" class="fa-solid fa-bars" @click="openNavbar = !openNavbar"></i>
            <i v-if="openNavbar" class="fa-solid fa-xmark" @click="openNavbar = !openNavbar"></i>
        </div>

        <ul v-if="openNavbar" class="navbar-bottom pt-4">
            <router-link to="/home">
                <li 
                    class="pb-1 from-pink-400 rounded" 
                    :class="{'bg-gradient-to-r text-black text-2xl pl-2': $route.path === '/home'}"
                >
                    {{ $t('home.title') }}
                </li>
            </router-link>

            <router-link to="/products">
                <li 
                    class="pb-1 from-pink-400 rounded"
                    :class="{'bg-gradient-to-r text-black text-2xl pl-2': $route.path === '/products' || $route.path === '/products/info'}"
                >
                    {{ $t('products.title') }}
                </li>
            </router-link>

            <router-link to="/categories">
                <li 
                    class="pb-1 from-pink-400 rounded" 
                    :class="{'bg-gradient-to-r text-black text-2xl pl-2': $route.path === '/categories'}"
                >
                    {{ $t('categories.title') }}
                </li>
            </router-link>

            <router-link to="/sales">
                <li 
                    class="pb-1 from-pink-400 rounded" 
                    :class="{'bg-gradient-to-r text-black text-2xl pl-2': $route.path === '/sales'}"
                >
                    {{ $t('sales.title') }}
                </li>
            </router-link>

            <div class="aside-top-bottom">
                <div class="user">
                    <div class="user-img-box">
                        <span>{{ setLetter() }}</span>
                    </div>
                    <h1 class="user-title">{{ truncateText(USER.name) }}</h1>
                </div>

                <div class="line"></div>

                <router-link to="/">
                    <li class="log-out"> {{ $t('home.logOut') }}</li>
                </router-link>
            </div>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import SetLetter from "@/mixins/set-letter";

@Component
export default class AsideTopComponent extends Mixins(
    SetLetter
) {
    openNavbar: boolean = false;

    truncateText(text: string): string {
        const maxLength = 20;

        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        
        return text;
    }
}

</script>

<style lang="sass" scoped>

@import ../style/aside-top-component

</style>