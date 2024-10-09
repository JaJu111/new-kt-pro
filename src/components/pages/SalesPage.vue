<template>
    <div>
        <div class="search-content flex justify-between mb-10 items-center">
            <h1 class="text-4xl font-medium text-black">{{ $t('sales.title') }}</h1>

            <div class="search-box">
                <input v-model.trim="searchBySales" type="text" placeholder="Поиск по продажам">

                <i class="fa-solid fa-magnifying-glass left-icon"></i>
                <i v-if="searchBySales.length" class="fa-solid fa-xmark right-icon" @click="searchBySales = ''"></i>
            </div>
        </div>

        <TableComponent 
            :salesArr="filterSalesArr"
        />
    </div>
</template>

<script lang="ts">
import { Mixins, Component } from "vue-property-decorator";
import TableComponent from '@/components/TableComponent.vue';
import SalesPageMixin from '@/mixins/sales-page/sales-mixin';

@Component({
	components: {
        TableComponent
	}
})

export default class SalesPage extends Mixins(
    SalesPageMixin
) {}

</script>

<style lang="sass" scoped>

@import ../../style/pages/home

</style>