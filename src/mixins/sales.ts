import { Component, Vue } from "vue-property-decorator";
import { SalesInfo } from '@/mixins/index';

@Component
export default class SalesMixin extends Vue {

	salesArr: SalesInfo[] = [
        {
            id: 3245,
            name: 'Виталий Логинов',
            date: '17 июл. 2024 г.',
            amount: '$212',
            status: 'NO_DELIVERED'
        },
        {
            id: 3143,
            name: 'Ольга Владимирова',
            date: '20 авг. 2024 г.',
            amount: '$125',
            status: 'DELIVERED'
        },
        {
            id: 2461,
            name: 'Юлия Князева',
            date: '01 авг. 2024 г.',
            amount: '$440',
            status: 'DELIVERED'
        },
        {
            id: 7321,
            name: 'Фёдор Тимофеев',
            date: '12 авг. 2024 г.',
            amount: '$115',
            status: 'NO_DELIVERED'
        },
        {
            id: 5432,
            name: 'Юлия Николаева',
            date: '31 июл. 2024 г.',
            amount: '$510',
            status: 'NO_DELIVERED'
        },
        {
            id: 3532,
            name: 'Ярослав Жуков',
            date: '28 июл. 2024 г.',
            amount: '$212',
            status: 'DELIVERED'
        },
        {
            id: 3928,
            name: 'Елена Молчанова',
            date: '20 авг. 2024 г.',
            amount: '$175',
            status: 'NO_DELIVERED'
        },
        {
            id: 3895,
            name: 'Игнатий Осипов',
            date: '18 авг. 2024 г.',
            amount: '$162',
            status: 'DELIVERED'
        },
        {
            id: 3930,
            name: 'Тамара Ларионова',
            date: '18 авг. 2024 г.',
            amount: '$339',
            status: 'DELIVERED'
        },
        {
            id: 3855,
            name: 'Валентина Овчинникова',
            date: '16 авг. 2024 г.',
            amount: '$22',
            status: 'DELIVERED'
        },
        {
            id: 3856,
            name: 'Виталий Андреев',
            date: '16 авг. 2024 г.',
            amount: '$484',
            status: 'NO_DELIVERED'
        },
        {
            id: 3853,
            name: 'Аркадий Кузьмин',
            date: '16 авг. 2024 г.',
            amount: '$894',
            status: 'DELIVERED'
        },
        {
            id: 3852,
            name: 'Дарья Третьякова',
            date: '16 авг. 2024 г.',
            amount: '$150',
            status: 'DELIVERED'
        },
        {
            id: 3851,
            name: 'Борис Копылов',
            date: '16 авг. 2024 г.',
            amount: '$380',
            status: 'DELIVERED'
        },
        {
            id: 3850,
            name: 'Ирина Бурова',
            date: '16 авг. 2024 г.',
            amount: '$143',
            status: 'NO_DELIVERED'
        },
        {
            id: 3750,
            name: 'Раиса Кононова',
            date: '15 авг. 2024 г.',
            amount: '$490',
            status: 'NO_DELIVERED'
        },
        {
            id: 3749,
            name: 'Матвей Пестов',
            date: '15 авг. 2024 г.',
            amount: '$325',
            status: 'DELIVERED'
        },
        {
            id: 3748,
            name: 'Евгений Афанасьев',
            date: '15 авг. 2024 г.',
            amount: '$50',
            status: 'DELIVERED'
        },
        {
            id: 3747,
            name: 'Раиса Куликова',
            date: '15 авг. 2024 г.',
            amount: '$258',
            status: 'DELIVERED'
        },
        {
            id: 3732,
            name: 'Антонина Чернова',
            date: '15 авг. 2024 г.',
            amount: '$170',
            status: 'NO_DELIVERED'
        },
        {
            id: 3808,
            name: 'Владислав Петухов',
            date: '14 авг. 2024 г.',
            amount: '$159',
            status: 'DELIVERED'
        },
        {
            id: 3807,
            name: 'Валерия Пономарева',
            date: '14 авг. 2024 г.',
            amount: '$374',
            status: 'DELIVERED'
        },
        {
            id: 3812,
            name: 'Тамара Семенова',
            date: '14 авг. 2024 г.',
            amount: '$80',
            status: 'DELIVERED'
        },
        {
            id: 3804,
            name: 'Василий Морозов',
            date: '14 авг. 2024 г.',
            amount: '$489',
            status: 'DELIVERED'
        },
        {
            id: 3765,
            name: 'Клавдия Селиверстова',
            date: '12 авг. 2024 г.',
            amount: '$665',
            status: 'DELIVERED'
        },
        {
            id: 3674,
            name: 'Ульяна Дьячкова',
            date: '11 авг. 2024 г.',
            amount: '$65',
            status: 'DELIVERED'
        },
        {
            id: 3632,
            name: 'Никита Анисимов',
            date: '10 авг. 2024 г.',
            amount: '$300',
            status: 'DELIVERED'
        },
    ]

}