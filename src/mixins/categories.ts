import { Component, Vue } from "vue-property-decorator";
import { Categories } from '@/mixins/index';

@Component
export default class CategoriesMixin extends Vue {

    pageLoading: boolean = false;

    created() {
		this.pageLoading = true;

        setTimeout(() => {
            this.pageLoading = false;
        }, 1000);
	}

	categories: Categories[] = [
        {
            id: 1,
            title: 'Бытовая техника',
            active: false,
            info: [
                {
                    text: 'Товары для кухни',
                    products: 13
                },
                {
                    text: 'Товары для дома',
                    products: 11
                },
                {
                    text: 'Красота и здоровье',
                    products: 9
                },
            ]
        },
        {
            id: 2,
            title: 'Смартфоны',
            active: false,
            info: [
                {
                    text: 'Смартфоны и гаджеты',
                    products: 19
                },
                {
                    text: 'Фототехника',
                    products: 24
                },
                {
                    text: 'Планшеты, электронные книги',
                    products: 22
                },
            ]
        },
        {
            id: 3,
            title: 'Компьютеры',
            active: false,
            info: [
                {
                    text: 'Компьютеры, ноутбуки и ПО',
                    products: 12
                },
                {
                    text: 'Комплектующие для ПК',
                    products: 21
                },
                {
                    text: 'Периферия и аксессуары',
                    products: 16
                },
            ]
        },
        {
            id: 4,
            title: 'Аксессуары',
            active: false,
            info: [
                {
                    text: 'Для мобильных устройств',
                    products: 2
                },
                {
                    text: 'Для компьютеров и ноутбуков',
                    products: 4
                },
                {
                    text: 'Для бытовой техники',
                    products: 1
                },
            ]
        },
        {
            id: 5,
            title: 'Автотовары',
            active: false,
            info: [
                {
                    text: 'Автоэлектроника и противоугонные системы',
                    products: 10
                },
                {
                    text: 'Автозвук',
                    products: 8
                },
                {
                    text: 'Наружные и внутрисалонные аксессуары',
                    products: 6
                },
            ]
        },
        {
            id: 6,
            title: 'Инструменты',
            active: false,
            info: [
                {
                    text: 'Электроинструменты и техника для сада',
                    products: 22
                },
                {
                    text: 'Строительство, измерение и уборка',
                    products: 19
                },
                {
                    text: 'Ручной инструмент и оснастка',
                    products: 15
                },
            ]
        },
    ]

}