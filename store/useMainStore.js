import { defineStore } from 'pinia';

export const useMainStore = defineStore({
    id:      'mainStore',
    state:   () => {
        return {
            windowWidth: 1920,
            burgerState: false,
            
            marketData: [],
            
            agencyData: [],
            
            token: null,
        };
    },
    actions: {
        changeBurgerState(newVal) {
            this.burgerState = newVal;
        },
        changeWindowWidth(width) {
            this.windowWidth = width;
        },
        
        async login(username, password) {
            if (useCookie('auth_token').value) {
                console.log(useCookie('auth_token').value);
                return;
            }
            
            useCookie('auth_token').value = await $fetch('/api/login', {
                method: 'post',
                body:   {
                    username: username,
                    password: password,
                },
            });
        },
        logout() {
            useCookie('auth_token').value = null;
            if (window.location.href.includes('agency')) {
                navigateTo('/');
            }
        },
    },
    getters: {
        getWindowWidth: state => state.windowWidth,
        
        getBurgerState: state => state.burgerState,
        
        getMarketData: state => state.marketData,
        
        getAgencyData: state => state.agencyData,
    },
});