import { defineStore } from 'pinia';

export const useMainStore = defineStore({
    id:      'mainStore',
    state:   () => {
        return {
            windowWidth: 1920,
            burgerState: false,
            
            marketData: [
                {
                    src:     '1.png',
                    reviews: 750,
                    days:    2,
                    amount:  450_500,
                    label:   'Сlavia Nord Grand сценическое цифровое пианино',
                    status:  1,
                },
                {
                    src:     '2.png',
                    reviews: 255,
                    days:    4,
                    amount:  3_285_000,
                    label:   'Hyundai Sonata 2.0 AT, 2023, 30 км',
                    status:  2,
                },
                {
                    src:     '3.png',
                    reviews: 255,
                    days:    2,
                    amount:  4_800_000,
                    label:   '2-к. квартира, 46 м², 1/5 эт.',
                    status:  2,
                },
                {
                    src:     '4.png',
                    reviews: 255,
                    days:    2,
                    amount:  7_500,
                    label:   'Старые барабаны',
                    status:  2,
                    thing:   true,
                },
                {
                    src:     '5.png',
                    reviews: 255,
                    days:    2,
                    amount:  7_500,
                    label:   'DMX сплиттер RJ45 to 4x XLR Stairville',
                    status:  2,
                },
                {
                    src:     '6.png',
                    reviews: 255,
                    days:    2,
                    amount:  217_500,
                    label:   'Мотоцикл honda',
                    status:  2,
                },
                {
                    src:     '7.png',
                    reviews: 255,
                    days:    2,
                    amount:  17_900,
                    label:   'Иж юпитер 5',
                    status:  2,
                },
                {
                    src:     '8.png',
                    reviews: 255,
                    days:    4,
                    amount:  7_500,
                    label:   'Пылесос кёрхер с водяным мешком для сбора пыли',
                    status:  3,
                },
            ],
            
            agencyData: [
                {
                    name:            'Дмитрий Хитрый',
                    documentApprove: true,
                    rating:          4.3,
                    testimonials:    19,
                    text:            'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
                    photo:           '1.png',
                },
                {
                    name:            'Апполинарий Землеперекопский',
                    documentApprove: true,
                    testimonials:    0,
                    text:            'Помог справиться с потерей и организовать похороны для 126 семей.',
                    photo:           '2.png',
                },
                {
                    name:            'Фёдор Сумкин',
                    documentApprove: false,
                    testimonials:    19,
                    text:            'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться. Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
                    photo:           '3.png',
                },
                {
                    name:            'Василий Копушин',
                    documentApprove: true,
                    rating:          4.3,
                    testimonials:    19,
                    text:            'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться. Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
                    photo:           '4.png',
                },
                {
                    name:            'Феофан Кусакин',
                    documentApprove: false,
                    rating:          4.3,
                    testimonials:    19,
                    text:            'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться. Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
                    photo:           '5.png',
                },
                {
                    name:            'Василиса Землеперекопская',
                    documentApprove: true,
                    rating:          4.3,
                    testimonials:    19,
                    text:            'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться. Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
                    photo:           '6.png',
                },
            ],
        };
    },
    actions: {
        changeBurgerState(newVal) {
            this.burgerState = newVal;
        },
        changeWindowWidth(width)  {
            this.windowWidth = width
        },
    },
    getters: {
        getWindowWidth: state => state.windowWidth,
        
        getBurgerState: state => state.burgerState,
        
        getMarketData: state => state.marketData,
        
        getAgencyData: state => state.agencyData,
    },
});