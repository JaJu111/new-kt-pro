<template>
    <div class="table-box">
        <table 
            v-if="salesArr.length"
            class="table table-hover table-striped sales-table rounded bg-[#fff]"
        >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Клиент</th>
                    <th>Дата</th>
                    <th>Стоимость</th>
                    <th>Статус</th>
                </tr>
            </thead>
            
            <tbody>
                <tr 
                    v-for="item in salesArr" 
                    :key="item.id"
                >
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ getUserStatus(item.status) }}</td>
                </tr>
            </tbody>
        </table>

        <div v-else class="w-full h-[50px] bg-white flex items-center justify-center">
            <i class="fa-solid fa-circle-exclamation text-lg mr-3 text-[#e5a233]"></i>
            <span class="text-base font-medium text-black">По запросу ничего не найдено...</span>
        </div>
    </div>
</template>

<script lang="ts">
import { SalesInfo } from "@/mixins";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TableComponent extends Vue {

    @Prop({ type: Array, default: () => [] }) readonly salesArr!: SalesInfo[];

    @Prop({ type: Boolean, default: false }) readonly filteredTable!: boolean;

    getUserStatus(status: string): string {
        switch(status) {
            case 'DELIVERED':
                return 'Доставлено';
            case 'NO_DELIVERED':
                return 'В пути';
        }
    }
}

</script>

<style lang="sass" scoped>

@import ../style/pages/sales

</style>