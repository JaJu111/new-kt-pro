<template>
    <div>
        <div 
            :class="['category', {'category_open': item.active}]"
        >
            <header 
                class="category__header" 
                @click="categoryOpenEmit(item.id)"
            >
                {{ item.title }}
                <div>
                    {{ `Продано ${categoriesItemsSold(item.id)} товаров` }}
                </div>
            </header>

            <div class="category__body">
                <div class="subcategory-list">
                    <ul 
                        v-for="(info, idx) in item.info"
                        :key="idx"
                        class="sortable-list"
                    >
                        <li class="categories__sortable-list-item sortable-list__item">
                            <strong>{{ info.text }}</strong>
                            <span><b>{{ info.products }}</b> products</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Categories, CategoriesInfo } from "@/mixins";

@Component
export default class CategoryComponent extends Vue {

    @Prop({ type: Object, default: () => ({}) }) readonly item!: Categories;

    categoryOpenEmit(id: number): void {
        this.$emit('click', id);
    }

    categoriesItemsSold(id: number): number {
        let itemsSold: number = 0;
        
        if (this.item.id === id) {
            itemsSold = this.item.info.reduce((sum, i: CategoriesInfo) => sum += i.products, 0);
        }

        return itemsSold;
    }
}

</script>

<style lang="sass" scoped>

@import ../style/pages/categories

</style>