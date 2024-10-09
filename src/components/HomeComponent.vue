<template>
    <div>
        <div class="aside-box">
            <div class="aside">
                <div class="aside-top">
                    <AsideTopComponent />
                </div>

                <div :class="['aside-left', {'hide': hideAside}]">
                    <AsideLeftComponent 
                        @hide-aside="toggleHideAside"
                    />
                </div>

                <div :class="{'hide': hideAside}" class="aside-right bg-gradient-to-t from-purple-500 to-pink-500">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import AsideLeftComponent from '@/components/AsideLeftComponent.vue';
import AsideTopComponent from '@/components/AsideTopComponent.vue';
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        AsideLeftComponent,
        AsideTopComponent
    }
})

export default class HomeComponent extends Vue {
    hideAside: boolean = false;

    toggleHideAside(value: boolean): void {
        this.hideAside = value;
    }
}

</script>

<style lang="sass" scoped>

@import ../style/home-component

</style>