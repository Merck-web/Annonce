import { defineStore } from 'pinia';

export const useMainStore = defineStore({
    id:      'mainStore',
    state:   () => {
        return {
            windowWidth: 1920,
            burgerState: false,
        };
    },
    actions: {
        changeBurgerState(newVal) {
            this.burgerState = newVal;
        },
    },
    getters: {
        getWindowWidth: state => state.windowWidth,
        
        getBurgerState: state => state.burgerState,
    },
});