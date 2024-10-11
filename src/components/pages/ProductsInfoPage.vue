<template>
    <div>
        <div class="products-info">
            <div class="icon-box" @click="goBackProducts">
                <i class="fa-solid fa-arrow-left"></i>
            </div>

            <span @click="goBackProducts" class="text-4xl font-medium">{{ $t('products.title') }}</span>

            <div class="divide-box"></div>

            <h2 class="text-4xl font-medium info">{{ 'Редактировать' }}</h2>
        </div>

        <div class="products-info-box">
            <form @submit.prevent="submitProduct">
                <h1 class="products-title">Название товара</h1>

                <input v-model="productsInfo.title" type="text" class="form-control">

                <h1 class="products-text">Описание</h1>

                <div class="description">
                    <textarea class="form-control"></textarea>
                </div>

                <h1 v-if="!hideProductImg" class="products-text">Фото</h1>

                <div v-if="!hideProductImg" class="products-edit-img">
                    <div class="img-box">
                        <div class="img">
                            <img :src="productsInfo.img">
                        </div>

                        <span>{{ productsInfo.title }}</span>
                    </div>

                    <i @click="deleteProductImg" class="fa-solid fa-trash"></i>
                </div>

                <div class="other-blocks">
                    <h1>Цена ($)</h1>
                    <input v-model="productsInfo.amount / 100" type="text" class="form-control">


                    <h1>Количество</h1>
                    <input v-model="productsInfo.quantity" type="text" class="form-control">
                </div>

                <div class="select-box">
                    <select class="form-control">
                        <option>{{ productsInfo.status === 'ACTIVE' ?  'Активный' : 'Не активный'}}</option>
                        <option>{{ productsInfo.status === 'NOT_ACTIVE' ?  'Активный' : 'Не активный'}}</option>
                    </select>
                </div>

                <button class="btn btn-danger" type="submit">Сохранить товар</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProductsInfoPage extends Vue {
    productsInfo: any = JSON.parse(sessionStorage.getItem('productsInfo')) || {};
    hideProductImg: boolean = false;

    goBackProducts(): void {
        this.$router.push({
            name: 'products',
            params: {
                path: '/products'
            }
        })
    }

    submitProduct(): void {
        this.$router.push({
            name: 'products',
            params: {
                path: '/products'
            }
        })
    }

    deleteProductImg(): void {
        this.hideProductImg = true;
    }
}

</script>

<style lang="sass" scoped>

.products-info
    display: flex
    gap: 15px
    margin-bottom: 40px

    span
        color: #000
        cursor: pointer

    h2
        color: #000

    &-box
        background-color: #fff
        padding: 34px 32px 48px
        margin-bottom: 24px
        box-shadow: 0 2px 14px rgba(0, 0, 0, 0.30)
        border-radius: 4px

.divide-box
    width: 3px
    height: 30px
    background-color: #000
    margin-top: 8px
    transform: rotate(22deg)

.icon-box
    display: flex
    justify-content: center
    align-items: center
    width: 30px
    height: 30px
    background-color: #fff
    border-radius: 50%
    margin-top: 7px
    cursor: pointer

.products
    &-info-box

        input
            max-width: 500px
            margin-bottom: 24px

    &-title
        font-weight: 500
        font-size: 17px
        line-height: 20px
        color: #707683
        margin-bottom: 24px

    &-text
        font-weight: 500
        font-size: 17px
        line-height: 20px
        color: #707683
        margin-bottom: 12px

.description textarea
    width: 500px
    margin-bottom: 24px

.products-edit-img
    display: flex
    justify-content: space-between
    align-items: center
    background-color: #f5f6f8
    padding: 8px 22px
    border-radius: 4px
    margin-bottom: 24px

    i
        color: #96a1af
        cursor: pointer

.img-box
    display: flex
    align-items: center
    gap: 20px

.img
    width: 47px
    border: 1px solid #c2cfe0
    border-radius: 4px
    padding: 4px

.select-box
    max-width: 150px
    margin-bottom: 24px

.other-blocks h1
    font-weight: 500
    font-size: 17px
    line-height: 20px
    color: #707683
    margin-bottom: 10px


@media (max-width: 662px)
    .description textarea
        width: 100%


@media (max-width: 600px)
    .products-info
        gap: 12px

    .divide-box
        width: 2px
        height: 17px
        margin-top: 13px

    .products-info span, h2
        font-size: 20px

    .icon-box
        width: 25px
        height: 25px

    .img-box span
        font-size: 13px

    .products-edit-img
        padding: 8px 12px

        i
            margin-left: 12px


@media (max-width: 460px)
    .products-info
        margin-bottom: 20px


</style>