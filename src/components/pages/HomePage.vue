<template>
    <div>
        <LoaderComponent 
            :loading="pageLoading"
        />

        <div v-if="!pageLoading">
            <h1 class="text-4xl font-medium text-black mb-10">{{ $t('home.title') }}</h1>

            <ChartComponent
                :salesArr="salesArr"
            />

            <div class="search-content flex justify-between mt-10 mb-7 items-center">
                <h3 class="text-2xl font-medium text-black">{{ $t('home.topSellers') }}</h3>

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
    </div>
</template>

<script lang="ts">
import SalesPageMixin from '@/mixins/sales-page/sales-mixin';
import { Mixins, Component } from "vue-property-decorator";
import ChartComponent from '@/components/ChartComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';

@Component({
	components: {
		ChartComponent,
        TableComponent,
        LoaderComponent
	}
})

export default class HomePage extends Mixins(
    SalesPageMixin
) {}

</script>

<style lang="sass" scoped>

@import ../../style/pages/home

</style>