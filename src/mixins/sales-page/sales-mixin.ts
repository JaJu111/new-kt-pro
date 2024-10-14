import { Component, Mixins } from "vue-property-decorator";
import SalesMixin from '@/mixins/sales';

@Component
export default class SalesPageMixin extends Mixins(
    SalesMixin
) {
    searchBySales: string = '';
    filterArr: any[] = [];
    pageLoading: boolean = false;

    created() {
		this.pageLoading = true;

        setTimeout(() => {
            this.pageLoading = false;
        }, 1000);
	}

    get filterSalesArr() {
        if (this.$route.path === '/home') {
            this.filterArr = this.salesArr.filter(i => i.status === 'DELIVERED' && +i.amount.slice(1, 4) > 300);

            return this.filterArr.filter(i => {
                return i.name.toLowerCase().includes(this.searchBySales)
                    || i.id.toString().includes(this.searchBySales);
            });
        } else {
            
            return this.salesArr.filter(i => {
                return i.name.toLowerCase().includes(this.searchBySales)
                    || i.id.toString().includes(this.searchBySales);
            });
        }
    }
}