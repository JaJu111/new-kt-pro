<template>
    <div>
        <LoaderComponent 
            :loading="pageLoading"
        />

        <div v-if="!pageLoading">
            <h1 class="text-4xl font-medium text-black mb-10">{{ $t('categories.title') }}</h1>

            <CategoryComponent
                v-for="item in categories"
                :key="item.id"
                :item="item"
                @click="categoryOpen"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import CategoriesMixin from '@/mixins/categories';
import CategoryComponent from '@/components/CategoryComponent.vue';
import { Categories } from "@/mixins";
import LoaderComponent from '@/components/LoaderComponent.vue';

@Component({
	components: {
		CategoryComponent,
        LoaderComponent
	}
})

export default class CategoriesPage extends Mixins(
    CategoriesMixin
) {
    categoryOpen(id: number): void {
        this.categories.find((item: Categories) => {
            if (item.id === id) {
                item.active = !item.active;
            }
        });
    }
}

</script>

<style lang="sass" scoped>

@media (max-width: 1024px)
    .title
        font-size: 20px
        margin-bottom: 20px

</style>